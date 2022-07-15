import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Counter.module.sass';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => { this.setState((state, props) => ({ count: state.count + props.step })) }
  decrement = () => { this.setState((state, props) => ({ count: state.count - props.step })) }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.step === this.props.step;
  // }

  render(props) {
    console.log('hello');
    const { count } = this.state;
    return (
      <section className={styles.container}>
        <h2>count:{count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </section>
    );
  }
}
Counter.defaultProps = {
  step: 1
};
Counter.PropTypesypes = {
  step: PropTypes.number
}
export default Counter;
