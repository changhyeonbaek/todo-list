import React from 'react'
import styled from 'styled-components'
import { finish, remove } from '../reducer/todoSlice'
import { MdDone, MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'

const CheckButton = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 16px;

  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: border 200ms ease-in-out;
  color: ${props => (props.isdone ? '' : '#00704a')};
  border: ${props => (props.isdone ? '2px solid #00704a' : '2px solid #f86d7d')};
  &:hover {
    border: 2px solid #00704a;
  }
`

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  font-weight: bold;
  color: ${props => (props.isdone ? '#ced4da' : '#000')};
`

const RemoveButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  transition: color 100ms ease-in-out;
  &:hover {
    color: #ff6b6b;
  }
`

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${RemoveButton} {
      display: flex;
    }
  }
`

function TodoItem({ id, done, text }) {
  const dispatch = useDispatch()
  const onToggle = () => dispatch(finish(id))
  const onRemove = () => dispatch(remove(id))

  return (
    <TodoItemBox>
      <CheckButton isdone={done ? 1 : 0} onClick={onToggle}>
        {done && <MdDone />}
      </CheckButton>
      <Text isdone={done ? 1 : 0}>{text}</Text>
      <RemoveButton onClick={onRemove}>
        <MdDelete />
      </RemoveButton>
    </TodoItemBox>
  )
}

export default TodoItem
