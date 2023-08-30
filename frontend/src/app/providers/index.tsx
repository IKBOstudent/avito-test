import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@gravity-ui/uikit';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../redux/store';
import AppRouter from './AppRouter';

const Provider = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ReduxProvider store={store}>
                    <ThemeProvider theme="dark">
                        <AppRouter />
                    </ThemeProvider>
                </ReduxProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default Provider;
