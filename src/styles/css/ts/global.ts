import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import tw from 'twin.macro'
import 'animate.css'

export default createGlobalStyle`
  :root {
    --footer-color: ${({ theme }) => theme.colors.orange};
    --scrollbar-color: ${({ theme }) => theme.colors.primary};

    --toastify-color-info: ${({ theme }) => theme.colors.blue};
    --toastify-color-error: ${({ theme }) => theme.colors.red};
    --toastify-color-success: ${({ theme }) => theme.colors.green};
    --toastify-color-warning: ${({ theme }) => theme.colors.yellow};
  }

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

  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.colors.primary} #c9c5c5;
  }

  *::-webkit-scrollbar {
    ${tw`w-2.5 sm:w-1`}
  }

  *::-webkit-scrollbar-track {
    background: #c9c5c5;
  }

  *::-webkit-scrollbar-thumb {
    ${tw`w-2.5 sm:w-1`}
    background-color: var(--scrollbar-color);
    border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  }
`
