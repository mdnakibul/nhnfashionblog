import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import Login from './Components/Login/Login';
import PostABlog from './Components/PostABlog/PostABlog';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import PostDetails from './Components/PostDetails/PostDetails';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/admin">
            <AdminPanel></AdminPanel>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/uploadPost">
            <PostABlog></PostABlog>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
