import tw from 'twin.macro'
import styled from 'styled-components'

export const AppPageContainer = styled.section`
    ${tw`container mx-auto`}
    min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.headerHeight})`};
`
