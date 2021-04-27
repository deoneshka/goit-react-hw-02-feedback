import React, { Component } from "react";
import Container from './components/Container';
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import './App.css';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleFeedback = e => {
        const feedbackValue = e.target.value;

        this.setState((prevState) => ({
            [feedbackValue]: prevState[feedbackValue] + 1,
        }));
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage() {
        const positivePercentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);
        return positivePercentage ? positivePercentage : 0;
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        const keys = Object.keys(this.state);

        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={keys}
                        onLeaveFeedback={this.handleFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {
                        this.countTotalFeedback() > 0
                            ? <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={this.countTotalFeedback()}
                                positivePercentage={this.countPositiveFeedbackPercentage()}
                            />
                            : <Notification message='No feedback given'/>
                    }
                </Section>
            </Container>
        );
    };
};

export default App;