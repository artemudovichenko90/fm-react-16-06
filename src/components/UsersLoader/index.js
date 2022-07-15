import React, { Component } from 'react';
import { getUsers } from './../../api';
import Spinner from './../Spinner';
import config from '../../config';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,//закончился ли запрос
      isError: false,
      pageNum: config.DEFAULT_PAGE,
      nat: config.DEFAULT_NAT,
      amount: "10"
    }
  }

  handleChange = (event) => {
    this.setState({ nat: event.target.value });
  }

  handleChangeRbtn = (event) => {
    this.setState({ amount: event.target.value })
  }

  showUser = (user) => <li key={user.login.uuid}>{user.name.last} {user.name.first} {user.nat}</li>

  prevPage = () => {
    if (this.state.pageNum > 1) {
      this.setState(state => ({ pageNum: state.pageNum - 1 }));
    }

  }
  nextPage = () => {
    this.setState(state => ({ pageNum: state.pageNum + 1 }))
  }

  load = () => {
    this.setState({ isFetching: true })
    const { pageNum, nat, amount } = this.state;
    getUsers({ results: amount, page: pageNum, nat: nat })
      .then(data => {
        if (data.error) {//ошибка сервера
          this.setState({ isError: true })
        }
        else {
          this.setState({ users: data.results });
        }
      })
      .catch(error => this.setState({ isError: true }))
      .finally(() => this.setState({ isFetching: false }));
  }

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { pageNum, nat, amount } = this.state;
    if (pageNum !== prevState.pageNum || nat !== prevState.nat || amount !== prevState.amount) {
      this.load();
    }
  }
  render() {
    const { users, isError, isFetching, pageNum, nat, amount } = this.state;
    if (isFetching) {
      return <Spinner />
    }
    if (isError) {
      return <p>Error</p>
    }
    return (
      <section>
        <h2>Users Lists</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <button onClick={this.nextPage}>&gt;</button>
        <span>{pageNum}</span>
        <select value={nat} onChange={this.handleChange}>
          <option value="ch">CH</option>
          <option value="de">DE</option>
          <option value="fr">FR</option>
          <option value="gb">GB</option>
        </select>
        <span>amount:</span>
        <label><input onChange={this.handleChangeRbtn} checked={amount === "10"} type='radio' value={10} name='results' />10</label>
        <label><input onChange={this.handleChangeRbtn} checked={amount === "20"} type='radio' value={20} name='results' />20</label>
        <ul>
          {users.map(this.showUser)}
        </ul>
      </section>
    );
  }
}

export default UsersLoader;
