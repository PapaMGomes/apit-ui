import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`my-6`}
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-6`}
    color: ${({ theme }) => theme.colors.orange};

    &:last-of-type {
        ${tw`mt-6 mb-2`}
        color: ${({ theme }) => theme.colors.purple};
    }
`

export const Text = styled.p``

export const Button = styled(AppButton)`
    ${tw`px-6 font-bold text-[80%] flex items-center sm:w-[50%]`}

    background: ${({ theme }) => theme.colors.orange};
    color: #fff;

    > svg {
        ${tw`ml-2 text-lg`}
    }
`
