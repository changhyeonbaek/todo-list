import React from 'react'
import styled from 'styled-components'

const TodoHeaderBox = styled.div`
  padding: 32px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    text-align: center;
    color: #000000;
  }
  .days {
    margin-top: 20px;
    color: #b2b3b9;
    font-size: 21px;
  }
  .left-todo {
    color: #ff204e;
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
  }
`

function TodoHeader({ todos }) {
  const today = new Date()
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${days[today.getDay()]}요일`

  return (
    <TodoHeaderBox>
      <h1>{date}</h1>
    </TodoHeaderBox>
  )
}

export default TodoHeader