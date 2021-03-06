import { rgba } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

const animationIn = {
    className: 'animate__animated animate__fadeInRight'
}
interface TitleProps {
    showIcon?: boolean
    color: string
}

interface ArticleProps {
    isOpen: boolean
}

const groupAnimation = { className: 'animate__animated animate__fadeIn' }
const imageAnimation = { className: 'animate__animated animate__rotateIn' }
const itemAnimation = { className: 'animate__animated animate__backInRight' }

export const Backdrop = styled.div`
    ${tw`fixed w-full h-full top-0 left-0 flex justify-end z-30`}
    background: #000000a1;
`

export const Container = styled.section.attrs(animationIn)`
    ${tw`w-4/5 p-5 rounded-l-lg flex flex-col items-center`}
    background: ${({ theme }) => theme.colors.bgPrimary};
`

export const Image = styled.img.attrs(imageAnimation)`
    ${tw`w-24`}
`

export const Content = styled.article`
    ${tw`mt-12 w-full`}
`

export const Article = styled.article.attrs(itemAnimation)<ArticleProps>`
    ${tw`mx-2 py-4 relative cursor-pointer`}

    &:last-of-type {
        ${tw`mr-0`}
    }
    &:first-of-type {
        ${tw`ml-0`}
    }

    > div {
        ${({ isOpen }) => (isOpen ? tw`flex` : tw`hidden`)}
    }
`

export const Title = styled.b<TitleProps>`
    ${tw`px-4 py-2 rounded-full flex items-center justify-between bg-transparent`}
    border: 1px solid ${({ color }) => rgba(color, 0.2)};

    > svg {
        ${tw`ml-2`}
        display: ${({ showIcon }) => (showIcon ? 'block' : 'none')};
    }

    &:hover,
    &.active {
        background-color: ${({ color }) => color};
        color: ${({ theme }) => theme.colors.bgPrimary};
        box-shadow: 0px 2px 8px ${({ color }) => color};
    }
`

export const Group = styled.div.attrs(groupAnimation)`
    ${tw`mt-2 py-3 px-5 z-40 flex-col divide-y rounded shadow-lg`}
    background: ${({ theme }) => theme.colors.bgPrimary};
    min-width: 9rem;
    width: auto;
`

export const Item = styled.article`
    ${tw`py-1 cursor-pointer`}
    border-top: 1px solid ${({ theme }) => theme.colors.gray};

    &:first-of-type {
        ${tw`border-0`}
    }

    &:hover {
        ${tw`font-bold`}
        color: ${({ theme }) => theme.colors.primary};
    }
`
