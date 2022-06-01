import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`mt-8`}
`

export const Title = styled.h2`
    ${tw`font-bold mb-5 text-lg`}
    color: ${({ theme }) => theme.colors.secondary};
`

export const Subtitle = styled.h2`
    ${tw`font-bold text-lg my-4`}
    color: ${({ theme }) => theme.colors.primary};

    &:first-of-type {
        ${tw`mt-0`}
    }

    &:last-of-type {
        color: ${({ theme }) => theme.colors.green};
    }
`

export const Content = styled.article`
    ${tw`flex items-center sm:flex-col mt-8`}
`

export const Article = styled.article``

export const Image = styled.img`
    ${tw`w-72 mr-12 transition-all duration-700 sm:mb-8 sm:mr-0`}
`

export const Text = styled.p`
    ${tw`sm:text-justify`}
`
