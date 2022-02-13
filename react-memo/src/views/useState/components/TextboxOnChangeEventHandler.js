import { Component } from 'react';

export default class TextboxOnChangeEventHandler extends Component {
  constructor() {
    super();

    this.state = {
      uesrname: '',
      password: '',
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(e) {
    this.setState({ uesrname: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (<>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label
            htmlFor='username'
            className='form-label'
          >
            유저 이름
          </label>
          <input
            id='username'
            className='form-control'
            type='text'
            onChange={this.updateUsername}
          />

        </div>
        <div className='col-md-6'>
          <label
            htmlFor='password'
            className='form-label'
          >
            비밀번호
          </label>
          <input
            id='password'
            className='form-control'
            type='password'
            onChange={this.updatePassword}
          />
        </div>
      </form>

      <hr/>
      <div>
        <div>유저 이름: {this.state.uesrname}</div>
        <div>비밀번호: {this.state.password}</div>
      </div>
    </>);
  }
}
