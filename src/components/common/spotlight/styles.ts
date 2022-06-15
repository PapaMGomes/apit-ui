import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const titleAttrs = { className: 'animate__animated animate__fadeInDown' }

interface ContainerProps {
    color?: string
}

export const Container = styled.section<ContainerProps>`
    ${tw`rounded-bl-[65%] rounded-br-[30%] min-h-[240px] sm:max-h-[34vh]`}

    background: ${({ theme, color }) => (color ? color : theme.colors.primary)};
    box-shadow: 0px 8px 24px
        ${({ theme, color }) => (color ? color : theme.colors.primary)};
`

export const Content = styled(AppContainer)`
    ${tw`h-full flex flex-col items-center justify-center `}
`

export const Title = styled.p.attrs(titleAttrs)`
    ${tw`text-center w-3/5 text-[2.4rem] sm:text-lg font-bold cursor-default transition-all duration-700`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`
