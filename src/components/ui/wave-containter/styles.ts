import { rgba } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

interface WavesContainterProps {
    color?: string
}

export const Container = styled.section`
    ${tw`relative overflow-hidden  w-full flex justify-center items-center`}

    @keyframes animate {
        0%,
        100% {
            transform: translate(-50%, -75%) rotate(0deg);
        }
        25% {
            transform: translate(-50%, -75%) rotate(30deg);
        }
        50% {
            transform: translate(-50%, -75%) rotate(15deg);
        }
        75% {
            transform: translate(-50%, -75%) rotate(30deg);
        }
    }
`

export const WavesContainter = styled.article<WavesContainterProps>`
    ${tw`absolute left-0 w-full h-full`}
    background: ${({ theme, color }) =>
        color ? rgba(color, 0.2) : theme.colors.glassPrimary};
`

export const Wave = styled.span`
    ${tw`absolute top-0 left-2/4`}

    width: 100%;
    height: 70vh;
    transform: translate(10%, -75%);
    background: ${({ theme, color }) =>
        color ? rgba(color, 0.2) : theme.colors.primary};

    &:nth-child(1) {
        border-radius: 45%;
        background: ${({ theme, color }) =>
            color ? rgba(color, 0.2) : theme.colors.glassPrimary};
        animation: animate 10s linear infinite;
    }

    &:nth-child(2) {
        border-radius: 40%;
        animation: animate 12s linear infinite;
        background: ${({ theme, color }) =>
            color ? rgba(color, 0.2) : theme.colors.glassPrimary};
    }

    &:nth-child(3) {
        border-radius: 0% 0% 77% 0%;
        animation: animate 15s linear infinite;
        background: ${({ theme, color }) =>
            color ? rgba(color, 0.2) : theme.colors.glassPrimary};
    }
`

export const Content = styled.section`
    ${tw`w-full h-full py-2 z-10`}
`
