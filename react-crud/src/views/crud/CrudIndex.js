import { Component } from 'react';
import axios from 'axios';

export default class CrudIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
    };

    this.getUsers = this.getUsers.bind(this);
  }

  async componentDidMount() {
    await this.getUsers();
  }

  async getUsers() {
    this.setState({ loading: true });

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');

      this.setState({ users: res.data });
    } catch (error) {
      console.error(error);
    }

    this.setState({ loading: false });
  }

  renderUserTable(users) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={`user-${user.id}`}>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ user.username }</td>
                <td>{ user.email }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderUserTable(this.state.users);

    return (<>
      <div>
        <h1>CRUD</h1>
        <h3>리액트를 사용한 CRUD 예제 프로젝트입니다.</h3>
        {contents}
      </div>
    </>);
  }
}
