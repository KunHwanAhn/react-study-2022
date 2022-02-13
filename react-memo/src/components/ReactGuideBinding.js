import { Component } from 'react';

export default class ReactGuidBinding extends Component {
  constructor() {
    super();

    this.state = {
      message: '안녕하세요',
    };

    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <>
        <h1>React Binding</h1>
        <div>{this.state.message}</div>
        <hr />
        <input
          className='form-control'
          type='text'
          value={this.state.message}
          onChange={this.updateMessage}
        />
      </>
    );
  }
}
