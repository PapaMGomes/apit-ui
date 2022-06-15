import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppFormGroup, AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)``

export const Title = styled.p`
    ${tw`text-lg font-bold mb-8 flex justify-between items-center`}
    color: ${({ theme }) => theme.colors.blue};
`

export const Form = styled.form`
    ${tw`w-full flex flex-col`}
`

export const Row = styled.div`
    ${tw`flex w-full sm:flex-col`}

    > div,
    > article {
        &:first-of-type {
            ${tw`mr-4 sm:mr-0`}
        }
    }
`

export const Column = styled.article`
    ${tw`w-2/4 sm:w-full`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-full`}
`

export const Button = styled(AppButton)`
    ${tw`px-5 mt-8 w-[150px] font-bold flex self-center justify-center items-center transition-all duration-700`}
    color: ${({ theme }) => theme.colors.orange};
    border: 1px solid ${({ theme }) => theme.colors.orange};
`

export const Input = styled.input``

export const Select = styled.select``

export const Option = styled.option``

export const Label = styled.label``

export const Span = styled.span``
