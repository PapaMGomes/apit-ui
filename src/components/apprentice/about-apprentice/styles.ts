import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`mt-8`}
`

export const Title = styled.b`
    ${tw`text-lg`}
`

export const Content = styled.article`
    ${tw`flex mt-4 sm:flex-col`}
`

export const Text = styled.p`
    ${tw`sm:text-justify`}
`

export const Image = styled.img`
    ${tw`w-72 mr-5 rounded-lg sm:w-full sm:mb-6 object-cover`}
`

export const BreakLine = styled.br``
