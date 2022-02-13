import { Component } from 'react';

const doneStyle = {
  textDecoration: 'line-through',
}

export default class TodoItemInMemory extends Component {
  render() {
    return (
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={this.props.isDone}
          onChange={() => { this.props.handleCheckedChanged(this.props.id) }}
        />
        <label
          className='form-check-label'
          style={this.props.isDone ? doneStyle : null}
        >
          {this.props.title}
        </label>
      </div>
    );
  }
}
