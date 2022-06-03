import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/components'

const imageContainerAttrs = {
    className: 'animate__animated animate__backInDown'
}

export const Container = styled.header`
    height: ${({ theme }) => theme.sizes.headerHeight};
`

export const Nav = styled.nav`
    ${tw`fixed w-full shadow-md z-20`}
    backdrop-filter: blur(15px);
    height: ${({ theme }) => theme.sizes.headerHeight};
    background: ${({ theme }) => theme.colors.bgPrimary};
`

export const Content = styled(AppContainer)`
    ${tw`h-full py-4 flex items-center md:justify-between `}
`

export const ImageContainer = styled.figure.attrs(imageContainerAttrs)`
    ${tw`w-36 mr-8 cursor-pointer`}
`

export const Image = styled.img`
    ${tw`w-full`}
    vertical-align: middle;
`

export const Button = styled(AppButton)`
    ${tw`hidden md:block w-12 space-y-2 px-2 rounded-lg shadow-md`}
`

export const Line = styled.span`
    ${tw`block w-full h-0.5 bg-gray-600`}
    background: var(--footer-color);
`
