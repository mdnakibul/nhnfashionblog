import React from 'react';
import {  useHistory } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText, } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import PostABlog from '../PostABlog/PostABlog';

const UploadPost = () => {

    const history = useHistory();
    const handleClick = (route)=>{
        history.push('/' + route)
    }

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
                    <NavItem eventKey="charts" onClick={()=>handleClick('uploadPost')}>
                        <NavIcon>
                            <i className="fas fa-calendar-plus" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Upload A post
                        </NavText>
                    </NavItem>
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
        `   <PostABlog/>

        </section>
    );
};

export default UploadPost;