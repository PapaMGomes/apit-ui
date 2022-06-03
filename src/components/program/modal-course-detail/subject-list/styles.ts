import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.section``

interface TitleProps {
    color?: string
}

export const Title = styled.p<TitleProps>`
    ${tw`mb-4 font-bold w-full flex justify-between`}
    color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`

export const Content = styled.article`
    ${tw`grid gap-3 sm:w-[70vw]`}
    scroll-snap-align: center;
`

export const Card = styled.div`
    ${tw`px-4 py-2 shadow-md rounded-lg flex items-center justify-between`}
    border: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Text = styled.p`
    ${tw`text-[100%]`}
`

export const Icon = styled.i`
    ${tw`flex items-center`}

    > svg {
        ${tw`mr-1`}
    }
`
