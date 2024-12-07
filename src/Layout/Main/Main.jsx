import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../../pages/Sherd/Fotter';
import NavBar from '../../pages/Sherd/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;