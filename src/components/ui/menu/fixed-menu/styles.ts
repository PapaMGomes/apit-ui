import tw from 'twin.macro'
import { rgba } from 'polished'
import styled from 'styled-components'

const groupAttrs = { className: 'animate__animated animate__fadeIn' }
const articleAttrs = { className: 'animate__animated animate__backInDown' }
interface TitleProps {
    showIcon?: boolean
    color: string
}

export const Container = styled.section`
    ${tw`flex sm:hidden`}
`

export const Article = styled.article.attrs(articleAttrs)`
    ${tw`mx-2 py-4 relative cursor-pointer`}

    &:last-of-type {
        ${tw`mr-0`}
    }
    &:first-of-type {
        ${tw`ml-0`}
    }

    &:hover {
        > div {
            ${tw`flex`}
        }
    }
`

export const Title = styled.b<TitleProps>`
    ${tw`px-4 py-2 rounded-full flex items-center bg-transparent`}
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

export const Group = styled.div.attrs(groupAttrs)`
    ${tw`hidden absolute mt-2 py-3 px-5 z-20 flex-col divide-y rounded shadow-lg`}
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
