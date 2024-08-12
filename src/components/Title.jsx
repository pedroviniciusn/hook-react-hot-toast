import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: var(--title);
`

const Title = props => {
  return <StyledTitle>{props.title}</StyledTitle>
}

export default Title
