import { Component } from 'react';

import TodoItemInMemory from './TodoItemInMemory';

export default class TodoListInMemory extends Component {
  constructor() {
    super();

    const todoItems = [
      {
        id: 1,
        title: 'React 학습',
        isDone: true,
      },
      {
        id: 2,
        title: 'Webpack + React 학습',
        isDone: false,
      },
    ];

    this.state = {
      todoItems,
    };

    this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
  };

  handleCheckedChanged(id) {
    this.setState((prevState) => {
      const { todoItems, ...newState } = prevState;

      newState.todoItems = todoItems.map((todoItem) => {
        const newTodoItem = { ...todoItem }

        if (newTodoItem.id === id) {
          newTodoItem.isDone = !newTodoItem.isDone;
        }

        return newTodoItem;
      });

      return newState;
    });
  }

  render() {
    return (
      <>
        <h1>초간단 인-메모리 TODO 리스트</h1>

        {this.state.todoItems.map((todoItem) => {
          return (
            <TodoItemInMemory
              key={todoItem.id}
              id={todoItem.id}
              title={todoItem.title}
              isDone={todoItem.isDone}
              handleCheckedChanged={this.handleCheckedChanged}
            />
          );
        })}
      </>
    );
  }
}
