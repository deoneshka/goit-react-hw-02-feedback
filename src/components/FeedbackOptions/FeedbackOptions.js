import React from "react";
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={styles.wrapper}>
            {
                options.map((option) => (
                    <button
                        className={styles.button}
                        type="button"
                        key={option}
                        value={option}
                        onClick={onLeaveFeedback}
                    >{option}
                    </button>
                ))
            }
        </div>
    )
}

export default FeedbackOptions;