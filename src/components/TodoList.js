import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem.js'

const TodoListBox = styled.div`
  flex: 1;
  padding: 20px 28px;
  overflow-y: auto;
  box-sizing: border;
`

function TodoList() {
  const todoList = useSelector(state => state.todo)
  const todoListView = todoList.map((todo, i) => <TodoItem id={todo.id} text={todo.text} done={todo.done} key={todo.id} />)

  return <TodoListBox>{todoListView}</TodoListBox>
}

export default TodoList
