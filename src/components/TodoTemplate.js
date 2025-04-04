import React from 'react'
import styled from 'styled-components'

const TodoTemplateBox = styled.div`
  width: 500px;
  height: 650px;
  position: relative;
  background: #fefded;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`

function TodoTemplate({ children }) {
  return <TodoTemplateBox>{children}</TodoTemplateBox>
}

export default TodoTemplate
