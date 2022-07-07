import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css'
const initialState = {
  email: '',
  pwd: '',
  emailIsInvalid: false,
  pwdIsInvalid: false
}
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState }
  }
  handlerForm = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({ ...initialState })
  }
  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`${name}IsInvalid`]: value.includes(' ') })
  }
  render() {
    const { email, pwd, emailIsInvalid, pwdIsInvalid } = this.state;
    const emailClass = cx(styles.input, { [styles.invalid]: emailIsInvalid });
    const pwdClass = cx(styles.input, { [styles.invalid]: pwdIsInvalid });
    return (
      <form onSubmit={this.handlerForm} className={styles.form} >
        <input onChange={this.handlerInput} value={email} className={emailClass} placeholder="email" type="text" name="email" />
        <input onChange={this.handlerInput} value={pwd} className={pwdClass} placeholder="password" type="password" name="pwd" />
        <input className={styles.input} type="submit" value="Send" />
      </form>
    );
  }
}

export default SignInForm;
