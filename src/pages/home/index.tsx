import React from 'react';

import styles from './styles.module.scss';

const HomePage = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
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

export default HomePage;
