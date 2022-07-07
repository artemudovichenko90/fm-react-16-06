import React, { Component } from 'react';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0) };
    this.idInterval = null;
    console.log('constructor');
  }
  tick = () => {
    this.setState(state => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  }
  start = () => {
    this.stop();
    this.idInterval = setInterval(this.tick, 1000);
  }
  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  }
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) })
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.start();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stop();
  }
  render() {
    console.log('render');
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString('it-IT')}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }
}

export default StopWatch;
