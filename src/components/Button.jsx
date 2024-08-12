import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  color: var(--background);
  font-size: 1.25rem;
  text-transform: uppercase;
`

const Button = props => {
  const { type, text, ...rest } = props

  const types = {
    success: 'var(--green)',
    error: 'var(--red)',
    promise: 'var(--blue)'
  }

  return (
    <StyledButton style={{ background: types[type] }} {...rest}>
      {text}
    </StyledButton>
  )
}

export default Button
