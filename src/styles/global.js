import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  --green: #33CC95;
  --blue: #5429CC;
  --red: #E52E4D;
  --title: #363F5F;
  --text: #969CB2;
  --background: #F0F2F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

button:hover {
  filter: brightness(0.9);
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
}
`

export default GlobalStyle
