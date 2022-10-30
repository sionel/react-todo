import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({ id, text, checked }) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    const arr = [
      <h1>test1</h1>,
      <h1>test2</h1>,
    ]

    return (
      <div>
        {/* {todoList} */}
        {arr.map(e => {
          debugger
          return e
        })}
      </div>
    );
  }
}

export default TodoItemList;