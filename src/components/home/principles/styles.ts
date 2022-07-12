import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Section = styled.section`
    ${tw`my-8 py-12`}
    background: ${({ theme }) => theme.colors.purple};
`

export const Container = styled(AppContainer)``

export const Content = styled.article`
    ${tw`grid gap-5 grid-cols-3 sm:flex sm:overflow-x-auto`}
    scroll-snap-type: x mandatory;
`

export const Card = styled.div`
    ${tw`px-6 py-5 shadow-lg h-full sm:w-[80vw] rounded-lg cursor-default transition-transform duration-700`}
    background: ${({ theme }) => theme.colors.bgPrimary};
    scroll-snap-align: center;
`

export const Image = styled.img``

export const Title = styled.h4`
    ${tw`text-lg mb-3`}
`

export const Text = styled.p`
    ${tw`text-left`}
`
