import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled.footer`
    ${tw`shadow-md`}
    height: ${({ theme }) => theme.sizes.footerHeight};
`

export const Content = styled(AppContainer)`
    ${tw`flex flex-col justify-center w-full h-full`}
`

export const Title = styled.strong`
    ${tw`text-lg`}
`

export const Section = styled.section`
    ${tw`w-full flex flex-col items-center`}
`

export const Text = styled.p`
    ${tw`text-center`}
`

export const Article = styled.article`
    ${tw`flex`}
`

export const Image = styled.img`
    ${tw`w-32 mr-4`}
`

export const SocialMediaContainer = styled.div`
    ${tw`flex items-center mb-2`}
`

export const SocialMediaItem = styled.i`
    ${tw`w-10 h-10 mx-2 text-lg rounded-full flex items-center justify-center cursor-pointer transition-transform duration-700`}
    background: var(--footer-color);
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        transform: scale(1.2);
    }
`
