import React from 'react'
import styled from 'styled-components'

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

const ButtonsContainer = props => {
  return <StyledButtonsContainer>{props.children}</StyledButtonsContainer>
}

export default ButtonsContainer
