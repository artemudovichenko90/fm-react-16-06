import React, { Component } from 'react';

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null,
      isFetching: false
    }
  }
  load = () => {
    const { getItems } = this.props;
    this.setState({ isFetching: true });
    getItems()
      .then(data => this.setState({ items: data }))
      .catch(error => { this.setState({ error }) })
      .finally(() => this.setState({ isFetching: false }));
  }
  componentDidMount() {
    this.load();
  }
  render() {
    const { items, error, isFetching } = this.state;
    const { render } = this.props;
    if (error) {
      return <p>Error!</p>
    }
    if (isFetching) {
      return <p>Loading!</p>
    }
    return (
      <>{render(this.state)}</>
    );
  }
}

export default DataProvider;
