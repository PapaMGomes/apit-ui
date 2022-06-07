import tw from 'twin.macro'
import styled from 'styled-components'

export const Text = styled.p`
    ${tw`w-3/5 mt-4 text-center sm:text-sm`}
    color: ${({ theme }) => theme.colors.bgPrimary}
`
