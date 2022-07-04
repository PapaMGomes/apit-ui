import React from 'react'
import * as yup from 'yup'
import { FiSend } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmailService } from '@/services/email.service'
import { AlertService } from '@/services/_alert.service'
import { ContactInterface } from '@/interfaces/contact.interface'
import { TemplateEmailModel } from '@/models/email/template-email.model'
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
import { RECIPIENT_CONTACT } from '@/config/email.config'
import { loadingControl } from '@/hooks/loading.hook'

const ContactEmail: React.FC = () => {
    const emailService = new EmailService()
    const alertService = new AlertService()
    const templateEmailModel = new TemplateEmailModel()

    const contactForm = yup.object().shape({
        name: yup.string().required('Insira o seu nome'),
        email: yup.string().required('Insira o seu email'),
        message: yup.string().required('Insira o corpo do e-mail'),
        subject: yup.string().required('Insira o assunto do e-mail')
    })

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ContactInterface>({ resolver: yupResolver(contactForm) })

    const handleSubmitForm = async (model: ContactInterface) => {
        loadingControl(true, 'Enviando o seu contato...')

        try {
            const emailDTO = {
                from: model.email,
                replyTo: model.email,
                to: RECIPIENT_CONTACT,
                subject: model.subject,
                html: templateEmailModel.contact(model)
            }

            const { data } = await emailService.send(emailDTO)
            alertService.success(data.message)
            reset()
        } catch (error) {
            alertService.error('Ocorreu um erro ao enviar o currículo')
        } finally {
            loadingControl(false)
        }
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
