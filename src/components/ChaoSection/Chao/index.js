import { Component } from 'react';
import PropTypes from 'prop-types';
class Chao extends Component {
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  switchState = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi })
  }
  render() {
    const { name } = this.props;
    const { isHi } = this.state;
    if (isHi) {
      return <>
        <h2>Hi! {name}!</h2>
        <button onClick={this.switchState}>Switch</button>
      </>
    }
    return <h2>Bye! {name}!</h2>
  }
}
Chao.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Chao;