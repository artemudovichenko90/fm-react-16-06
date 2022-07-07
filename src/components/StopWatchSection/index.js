import React, { Component } from 'react';
import StopWatch from './StopWatch/index';
import styles from './StopWatchSection.module.css';


class StopWatchSection extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }
  visibleButton = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible })
  }
  render() {
    const { isVisible } = this.state;
    return <section className={styles.container}>
      <button onClick={this.visibleButton}>unmount</button>
      {isVisible ? <StopWatch /> : null}
    </section>
  }

}
export default StopWatchSection;
