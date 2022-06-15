import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton } from '@/styles/css/components'

export const Text = styled.p`
    ${tw`w-3/5 mt-4 text-center sm:text-sm`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`

export const Button = styled(AppButton)`
    ${tw`px-4 mt-6 font-bold text-[80%] sm:w-[50%]`}
    background: #FFF;
    color: var(--footer-color);
`
