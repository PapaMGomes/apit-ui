import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import 'animate.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${tw`text-base`}
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bgPrimary};
  }

  html {
    scroll-behavior: smooth;
  }

  #__next {
      height: 100vh;
  }
`
