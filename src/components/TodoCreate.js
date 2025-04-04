import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import todoSlice, { add } from '../reducer/todoSlice'

const CreateButton = styled.button`
  background: #00704a;
  z-index: 10;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: #eeeeee;
  transform: translate(-50%, 50%);
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 0;
  transition: background, transform 300ms ease-in-out;
  &:hover {
    background: #ff6b6b;
  }
  &:active {
    background: #fa5252;
  }
  ${props =>
    props.open &&
    css`
      background: #fa5252;
      &:hover {
        background: #f86d7d;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg) scale(1.1);
      transition: transform 300ms ease-in-out;
    `}
`

const InsertFormWrapper = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`

const InsertForm = styled.form`
  background: #c6ebc5;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #a1c398;
  width: auto;
  height: 100px;
  padding: 28px;
`

const InsertInput = styled.input`
  margin: 0 auto;
  box-sizing: border-box;
  background: #ffffec;
  width: 100%;
  height: 40px;
  padding: 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: text;
  transition: all 150ms ease-in;
  &:focus {
    height: 50px;
    background: #fefbf6;
  }
`

function TodoCreate() {
  const [open, setOpen] = useState(false)
  const onToggle = () => {
    setOpen(!open)
  }
  const dispatch = useDispatch()

  const [todoList, setTodoList] = useState({
    id: 0,
    text: '',
  })

  function handleText(e) {
    setTodoList({ text: e.target.value })
  }

  function onReset() {
    setTodoList({ text: '' })
  }

  return (
    <>
      {open && (
        <InsertFormWrapper>
          <InsertForm
            onSubmit={e => {
              e.preventDefault()
              if (todoList.text !== '') {
                dispatch(add(todoList.text))
              } else {
                alert('할 일을 입력하세요~')
              }
              onReset()
            }}
          >
            <InsertInput
              value={todoList.text}
              onChange={handleText}
              placeholder="할 일을 작성후 Enter 입력"
            ></InsertInput>
          </InsertForm>
        </InsertFormWrapper>
      )}
      <CreateButton onClick={onToggle} open={open}>
        <MdAdd />
      </CreateButton>
    </>
  )
}

export default TodoCreate
