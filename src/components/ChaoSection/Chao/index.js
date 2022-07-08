import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chao.module.scss';
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
      return <div className={styles.container}>
        <h2 className={styles.container__h2}>Hi! {name}!</h2>
        <button className={styles.container__btn} onClick={this.switchState}>Switch</button>
      </div>
    }
    return <h2>Bye! {name}!</h2>
  }
}
Chao.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Chao;