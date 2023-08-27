import { Loader } from '@gravity-ui/uikit';

import styles from './styles.module.scss';

const PageLoader = () => {
    return (
        <div className={styles.root}>
            <Loader size="l" />
        </div>
    );
};

export default PageLoader;
