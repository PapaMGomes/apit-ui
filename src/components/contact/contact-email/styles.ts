import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup, AppButton } from '@/styles/css/components'

export const Container = styled.section`
    ${tw`w-2/4 ml-4 pl-4 md:w-full md:ml-0 md:pl-0 md:border-0`}
    border-left: 1px solid ${({ theme }) => theme.colors.bgSecondary};
`

export const Title = styled.p`
    ${tw`text-lg font-bold mb-3 flex justify-between items-center`}
`

export const Form = styled.form`
    ${tw`w-full`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-full`}

    &:first-child {
        ${tw`pr-3`}
    }
`

export const Button = styled(AppButton)`
    ${tw`px-5 font-bold flex justify-between items-center transition-all duration-700`}
    color: ${({ theme }) => theme.colors.orange};
    border: 1px solid ${({ theme }) => theme.colors.orange};

    > span {
        ${tw`hidden`}
    }

    &:hover {
        > span {
            ${tw`block`}
        }

        > svg {
            ${tw`ml-4`}
        }
    }
`

export const ButtonText = styled.span`
    ${tw`transition-all duration-700`}
`

export const Input = styled.input``

export const Textarea = styled.textarea``

export const Label = styled.label``

export const Span = styled.span``
