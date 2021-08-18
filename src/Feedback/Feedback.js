import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = (e) => {
    let name = e.target.name;
    this.setState((prevState) => {
      let handler = prevState[name];
      return (prevState[name] = handler + 1);
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="good"
            onFeedbackButtonClick={this.addFeedback}
          />
          <FeedbackOptions
            options="neutral"
            onFeedbackButtonClick={this.addFeedback}
          />
          <FeedbackOptions
            options="bad"
            onFeedbackButtonClick={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : null}
          {total ? null : <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}

export default Feedback;
