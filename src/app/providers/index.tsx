import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@gravity-ui/uikit';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../redux/store';
import AppRouter from './AppRouter';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '@/shared/global.scss';

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
