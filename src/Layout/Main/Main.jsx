import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../../pages/Sherd/Fotter';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;