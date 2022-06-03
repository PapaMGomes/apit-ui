import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section``

interface HeaderProps {
    color?: string
}

export const Header = styled.article<HeaderProps>`
    ${tw`h-[6rem] w-full px-5 rounded-t-lg flex flex-col justify-center`}
    background: ${({ color }) => color};
    color: ${({ theme }) => theme.colors.bgPrimary};
`

export const Title = styled.h4`
    ${tw`text-lg flex`}
`

export const Icon = styled.i`
    ${tw`ml-3 flex items-center text-base`}

    > svg {
        ${tw`ml-1`}
    }
`

export const Subtitle = styled.p`
    ${tw`mt-4`}
`

export const Body = styled.section`
    ${tw`px-5 py-3 grid grid-cols-2 gap-7`}
`
