import styled from 'styled-components'
import tw from 'twin.macro'

export const Text = styled.p`
    ${tw`w-3/5 mt-4 text-center sm:text-sm`}
    color: ${({ theme }) => theme.colors.bgPrimary}
`
