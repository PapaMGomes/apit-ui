import tw from 'twin.macro'
import styled from 'styled-components'
interface AppContainerProps {
    page?: boolean
}

export const AppContainer = styled.section<AppContainerProps>`
    ${tw`container mx-auto px-8 md:px-4 py-4`}

    min-height: ${({ page, theme }) =>
        page ? `calc(100vh - ${theme.sizes.headerHeight})` : 'auto'};

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`
