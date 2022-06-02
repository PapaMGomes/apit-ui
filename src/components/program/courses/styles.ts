import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer, AppButton } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`mt-8`}
`

export const Title = styled.h4`
    ${tw`text-lg font-bold mb-8`}
    color: ${({ theme }) => theme.colors.orange};
`

export const Content = styled.article`
    ${tw`grid gap-5 grid-cols-5 sm:grid-cols-2`}
`

export const Card = styled.div`
    ${tw`h-56 shadow-lg rounded-lg cursor-pointer`}

    &:hover {
        > figure > img {
            transform: scale(1.2);
        }

        > section {
            > b {
                transform: scale(1.1);
            }

            > button {
                ${tw`font-bold`}
                color: ${({ theme }) => theme.colors.blue};
            }
        }
    }
`

export const CardBody = styled.section`
    ${tw`h-2/5 px-5 pt-5 flex flex-col justify-center items-center`}
`

export const ImageContainer = styled.figure`
    ${tw`h-3/5 w-full rounded-t-lg overflow-hidden`}
`

export const Image = styled.img`
    ${tw`rounded-t-lg object-cover w-full h-full transition-transform duration-700`}
`

export const CardTitle = styled.b`
    ${tw`transition-transform duration-500`}
`

export const Button = styled(AppButton)``
