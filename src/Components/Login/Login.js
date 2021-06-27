import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import loginImage from '../../images/login.svg';
import googleIcon from '../../images/google.svg'

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Initialize firebase 
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    // Setup Google Sign up 

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
            console.log(result);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    // Store Auth Token 

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row align-items-center mt-5">
                <div className="col-md-6">
                    <button className="btn btn-info d-block m-auto" onClick={handleGoogleSignIn}> <img src={googleIcon} alt="Google Icon" height="32px" /> Continue with Google</button>
                </div>
                <div className="col-md-6">
                    <img src={loginImage} alt="Login Vector" />
                </div>
            </div>
        </div>
    );
};

export default Login;