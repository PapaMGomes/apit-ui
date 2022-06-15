import React from 'react'
import * as yup from 'yup'
import { FiSend } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
    Container,
    Title,
    FormGroup,
    Button,
    Input,
    Label,
    Form,
    Span,
    Textarea,
    ButtonText
} from './styles'

const ContactEmail: React.FC = () => {
    const contactForm = yup.object().shape({
        name: yup.string().required('Insira o seu nome'),
        email: yup.string().required('Insira o seu email'),
        message: yup.string().required('Insira o corpo do e-mail'),
        subject: yup.string().required('Insira o assunto do e-mail')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>({ resolver: yupResolver(contactForm) })

    const handleSubmitForm = (contactFormData: any) => {
        console.log(contactFormData)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <Title>
                    Envie um e-mail
                    <Button type="submit">
                        <ButtonText>Enviar</ButtonText>
                        <FiSend />
                    </Button>
                </Title>

                <FormGroup>
                    <Label>Nome</Label>
                    <Input {...register('name')} type="text" />
                    <Span>{errors.name?.message}</Span>
                </FormGroup>

                <FormGroup>
                    <Label>E-mail</Label>
                    <Input {...register('email')} type="email" />
                    <Span>{errors.email?.message}</Span>
                </FormGroup>

                <FormGroup>
                    <Label>Assunto</Label>
                    <Input {...register('subject')} type="text" />
                    <Span>{errors.subject?.message}</Span>
                </FormGroup>

                <FormGroup>
                    <Label>Mensagem</Label>
                    <Textarea {...register('message')} rows={8} />
                    <Span>{errors.message?.message}</Span>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default ContactEmail
