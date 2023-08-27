import React from 'react';
import clsx from 'clsx';

import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';

import styles from './app.module.css';

const App = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <ViteLogo className={styles.logo} title="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <ReactLogo
                        className={clsx(styles.logo, styles.react)}
                        title="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={styles.card}>
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles.readTheDocs}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export default App;
