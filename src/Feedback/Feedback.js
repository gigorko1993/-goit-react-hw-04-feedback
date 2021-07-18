import React from "react";
import s from "./Feedback.module.css";
console.log(s);

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <section>
        <h2 className={s.title}>Please leave feedback</h2>
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
            <div>Good {this.state.good}</div>
          </li>
          <li>
            <div>Neutral {this.state.neutral}</div>
          </li>
          <li>
            <div>Bad {this.state.bad}</div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Feedback;
