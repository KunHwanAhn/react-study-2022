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
    this.goCreatePage = this.goCreatePage.bind(this);
    this.goEditPage = this.goEditPage.bind(this);
    this.goDeletePage = this.goDeletePage.bind(this);
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

  goCreatePage() {
    console.log('Create');
  }

  goEditPage(id) {
    console.log(`Edit by ${id}`);
  }

  goDeletePage(id) {
    console.log(`Delete by ${id}`);
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
            <td>Action</td>
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
                <td className='text-nowrap'>
                  <button
                    className='btn btn-sm btn-primary'
                    onClick={() => this.goEditPage(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-sm btn-danger ms-1'
                    onClick={() => this.goDeletePage(user.id)}
                  >
                    Delete
                  </button>
                </td>
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
        <h1 className='d-flex align-items-center'>
          <span>CRUD</span>
          <button
            className='btn btn-primary ms-2'
            onClick={this.goCreatePage}
          >
            <span className='fa fa-plus' />
          </button>
        </h1>
        <h3>리액트를 사용한 CRUD 예제 프로젝트입니다.</h3>
        {contents}
      </div>
    </>);
  }
}
