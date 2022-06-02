import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

const animationIn = {
    className: 'animate__animated animate__fadeInDown'
}

export const Backdrop = styled.section`
    ${tw`fixed w-full h-full top-0 left-0 flex flex-col justify-start items-center z-30`}
    background: #000000a1;
    padding-top: 16vh;
`

export const ModalContainer = styled.article.attrs(animationIn)`
    ${tw`p-6 pb-10 flex flex-col z-50 rounded-lg mx-14`}
    height: 40vh;
    background: ${({ theme }) => theme.colors.bgPrimary};
    max-width: 1440px;
`

export const ModalHeader = styled.div`
    ${tw`py-2`}
`

export const ModalBody = styled.div`
    ${tw`flex-auto overflow-y-auto`}
`

export const ModalFooter = styled.div`
    ${tw`py-2`}
`

export const Button = styled.button.attrs(animationIn)`
    ${tw`w-8 h-8 flex justify-center items-center z-50 rounded-full relative bottom-4`}
    background: ${({ theme }) => theme.colors.primary};

    > svg {
        color: #ffff;
    }
`
