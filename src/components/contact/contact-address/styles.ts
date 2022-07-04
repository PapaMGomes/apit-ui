import { AppButton } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-2/4 md:w-full md:mb-8`}
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-3`}
`

export const Content = styled.div`
    ${tw`grid gap-4 grid-cols-2 sm:flex sm:overflow-x-auto`}
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
        ${tw`hidden`}
    }
`

export const Card = styled.article`
    ${tw`p-4 shadow-md my-3 rounded-lg cursor-default text-center sm:min-w-[80vw]`}
    border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
    scroll-snap-align: center;
`

export const CardTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.orange};
`

export const Map = styled.iframe`
    ${tw`shadow-md rounded-lg w-full mb-6`}
`

export const Text = styled.p`
    ${tw`text-sm`}
`

export const CardFooter = styled.div`
    ${tw`flex justify-between`}
`

export const Button = styled(AppButton)`
    ${tw`w-[75%] text-center px-6 mt-5 font-bold transition-all duration-500`}
    color: ${({ theme }) => theme.colors.bgPrimary};
    background: ${({ theme }) => theme.colors.green};

    &:hover {
        box-shadow: 0px 0px 14px ${({ theme }) => theme.colors.green};
    }
`

export const PhoneLink = styled(Button)`
    ${tw`w-[20%] p-0 flex items-center justify-center`}
    background: ${({ theme }) => theme.colors.blue};

    &:hover {
        box-shadow: 0px 0px 14px ${({ theme }) => theme.colors.blue};
    }
`
