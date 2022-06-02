import tw from 'twin.macro'
import styled from 'styled-components'

export const AppPageContainer = styled.section`
    ${tw`container mx-auto`}

    min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.headerHeight})`};

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`
