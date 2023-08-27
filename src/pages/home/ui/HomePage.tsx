import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.root}>
            <button onClick={() => setCount(count => count + 1)}>
                count is {count}
            </button>
            <Link to={`/game/${count}`}>Visit game #{count}</Link>
        </div>
    );
};
