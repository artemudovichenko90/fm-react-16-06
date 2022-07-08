import React, { Component } from 'react';
import { format, add } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  handlerBtn = (options) => {
    const { date } = this.state;
    const newDate = add(date, options);
    this.setState({ date: newDate });
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>{format(date, "dd MMMM yyyy'year', cccc")}</p>
        <button onClick={()=>this.handlerBtn({days:1})}>+1 day</button>
        <button onClick={()=>this.handlerBtn({weeks:1})}>+1 week</button>
        <button onClick={()=>this.handlerBtn({months:1})}>+1 month</button>

      </div>
    );
  }
}

export default Calendar;
