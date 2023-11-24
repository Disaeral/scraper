import React, { useState } from 'react';
import styles from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1)
    }
    return (
        <div>
            <div>{count}</div>
            <div onClick={handleIncrement} className={styles.increment_button}>+1</div>
        </div>
    );
};

