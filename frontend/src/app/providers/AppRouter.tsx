import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from '@/shared/ui/PageLoader';
import ScrollToTop from '@/shared/lib/scrollRestoration';

const HomePage = lazy(() => import('@/pages/home'));
const GamePage = lazy(() => import('@/pages/game'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game/:id" element={<GamePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
