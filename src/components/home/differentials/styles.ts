import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)``

export const Content = styled.section`
    ${tw`flex justify-between sm:flex-col`}
`

export const Title = styled.h3`
    ${tw`text-lg font-bold mb-4`}
    color: ${({ theme }) => theme.colors.blue};
`

export const Subtitle = styled.p`
    ${tw`font-bold mb-4`}
    color: ${({ theme }) => theme.colors.green};
`

export const Article = styled.article`
    ${tw`sm:w-full sm:mb-4`}
    width: calc(50% - 12px);

    &:last-of-type > p {
        color: ${({ theme }) => theme.colors.red};
    }
`

export const Item = styled.div`
    ${tw`p-4 shadow-md my-3 rounded cursor-default transition-transform`}
    border: 1px solid ${({ theme }) => theme.colors.bgSecondary};

    &:hover {
        transform: scale(0.98);
    }
`
