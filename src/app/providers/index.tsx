import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterProvider from './RouterProvider';

import '@shared/global.scss';

const Provider = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <RouterProvider />
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default Provider;
