import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AdminPanel.css';
import SideNav, { NavItem, NavIcon, NavText, } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { UserContext } from '../../App';

const AdminPanel = () => {

    const history = useHistory();
const handleClick = (route)=>{
    history.push('/' + route)
}


const [loggedInUser,setLoggedInUser] = useContext(UserContext);
const [isAdmin, setIsAdmin] = useState(false);
console.log(loggedInUser.email)
useEffect(() => {
    fetch('https://polar-gorge-40384.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [loggedInUser])

    return (
        <section>


            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home" onClick={ () => handleClick('/adminHome')}>
                        <NavIcon>
                            <i className="fas fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    {
                        isAdmin && <div className="text-white pl-3 admin-option">
                            <NavItem eventKey="charts" onClick={()=>handleClick('uploadPost')}>
                        <NavIcon>
                            <i className="fas fa-calendar-plus" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Upload A post
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="addAdmin" onClick={()=>handleClick('addAdmin')}>
                        <NavIcon>
                            <i className="fas fa-user-shield" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Add Admin
                        </NavText>
                    </NavItem>
                        </div>
                    }
                    <NavItem eventKey="viewBlog" onClick={()=>handleClick('')}>
                        <NavIcon>
                            <i className="fas fa-book-reader" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            View Blog
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            {
                isAdmin &&  <h2 className="text-center">This is your control panel</h2>
            }
         {
             !isAdmin && <h2 className="text-center">You are not an admin</h2>
         }   

        </section>
    );
};

export default AdminPanel;