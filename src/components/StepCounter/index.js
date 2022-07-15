import React, { Component } from 'react';
import Counter from '../Counter/index';

class StepCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }
  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: Number(value) });
  }
  render() {
    const { step } = this.state;
    return (
      <div>
        <input
          name='step'
          type="range"
          onChange={this.handlerInput}
          value={step}
          min='1'
          max='10'
          step='1' />
        <h2>step:{step}</h2>
        <Counter step={step} />
      </div >
    );
  }
}


export default StepCounter;
