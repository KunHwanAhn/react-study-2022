import { Component } from 'react';

import UserListTable from './UserListTable';

export default class FetchApiPractice extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();

      this.setState({ users, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const contents = this.state.loading ? <p>loading...</p> : <UserListTable users={this.state.users} />;

    return (<>
      <h3>FetchApiPractice</h3>
      {contents}
    </>);
  }
}
