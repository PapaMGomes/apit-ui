import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`my-6`}
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-6`}
    color: ${({ theme }) => theme.colors.orange};
`

export const Text = styled.p``
