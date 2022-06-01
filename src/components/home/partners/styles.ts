import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)``

export const Title = styled.h3`
    ${tw`text-lg font-bold mb-4`}
    color: ${({ theme }) => theme.colors.red};
`

export const Content = styled.article`
    ${tw`grid gap-3 grid-cols-5 auto-rows-fr sm:grid-cols-2`}
`

export const Card = styled.div`
    ${tw`p-4 flex items-center justify-center shadow-md my-3 rounded cursor-default transition-transform duration-700`}
    border: 1px solid ${({ theme }) => theme.colors.bgSecondary};

    &:hover {
        transform: scale(0.94);
    }
`

export const CardTitle = styled.b`
    ${tw`w-full text-center`}
`

export const Image = styled.img`
    ${tw`w-3/4`}
`
