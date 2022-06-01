import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const titleAttrs = { className: 'animate__animated animate__fadeInDown' }

export const Container = styled.section`
    ${tw`h-[74vh] rounded-bl-[65%] rounded-br-[30%] sm:h-[30vh]`}
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 8px 24px ${({ theme }) => theme.colors.primary};
`

export const Content = styled(AppContainer)`
    ${tw`h-full flex items-center justify-center `}
`

export const Title = styled.p.attrs(titleAttrs)`
    ${tw`text-center w-3/5 text-[2.5rem] sm:text-lg font-bold cursor-default transition-all duration-700`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`
