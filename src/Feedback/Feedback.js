import React from "react";
import s from "./Feedback.module.css";
console.log(s);

export class Feedback extends React.Component {
  state = {
    good: 1,
    neutral: 3,
    bad: 0,
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
    return (
      <section>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <div>Good {good}</div>
          </li>
          <li>
            <div>Neutral {neutral}</div>
          </li>
          <li>
            <div>Bad {bad}</div>
          </li>
          <li>
            <div>Total {this.countTotalFeedback()}</div>
          </li>
          <li>
            <div>
              Positive feedback {this.countPositiveFeedbackPercentage()}%
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Feedback;
