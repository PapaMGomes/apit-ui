import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-2/4 ml-4 pl-4 md:w-full md:ml-0 md:pl-0 md:border-0`}
    border-left: 1px solid ${({ theme }) => theme.colors.bgSecondary};
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-3`}
`
