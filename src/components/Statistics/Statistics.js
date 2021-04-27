import React from "react";
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>Good: { good }</li>
            <li className={styles.li}>Neutral: { neutral }</li>
            <li className={styles.li}>Bad: { bad }</li>
            <li className={styles.li}>Total: { total }</li>
            <li className={styles.li}>Positive percentage: { positivePercentage }%</li>
        </ul>
    )
}

export default Statistics;