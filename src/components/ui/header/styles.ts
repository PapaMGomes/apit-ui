import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled.header`
    height: ${({ theme }) => theme.sizes.headerHeight};
`

export const Nav = styled.nav`
    ${tw`fixed w-full`}
    height: ${({ theme }) => theme.sizes.headerHeight};
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Content = styled(AppContainer)`
    ${tw`h-full py-4 flex items-center`}
`
