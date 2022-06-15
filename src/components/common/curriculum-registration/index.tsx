import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DELEGATE } from '@/constants/delegate.constant'
import {
    Container,
    Title,
    FormGroup,
    Column,
    Button,
    Input,
    Label,
    Form,
    Span,
    Row,
    Select,
    Option
} from './styles'

interface CurriculumRegistrationProps {}

const CurriculumRegistration: React.FC<CurriculumRegistrationProps> = props => {
    const contactForm = yup.object().shape({
        name: yup.string().required('Insira o seu nome'),
        email: yup.string().required('Insira o seu email'),
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
        <Container id={DELEGATE.curriculumRegistration}>
            <Title>Cadastre o seu currículo</Title>

            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <Row>
                    <Column>
                        <FormGroup>
                            <Label>Nome</Label>
                            <Input {...register('name')} type="text" />
                            <Span>{errors.name?.message}</Span>
                        </FormGroup>

                        <Row>
                            <FormGroup>
                                <Label>Sexo</Label>
                                <Select {...register('subject')}>
                                    <Option>Masculino</Option>
                                    <Option>Feminino</Option>
                                </Select>
                                <Span>{errors.subject?.message}</Span>
                            </FormGroup>

                            <FormGroup>
                                <Label>Data de nascimento</Label>
                                <Input {...register('subject')} type="date" />
                                <Span>{errors.subject?.message}</Span>
                            </FormGroup>
                        </Row>

                        <FormGroup>
                            <Label>E-mail</Label>
                            <Input {...register('email')} type="email" />
                            <Span>{errors.email?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Telefone (celular)</Label>
                            <Input {...register('subject')} type="text" />
                            <Span>{errors.subject?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Tipo de vaga pretendida</Label>
                            <Select {...register('subject')}>
                                <Option>Aprendiz</Option>
                                <Option>Estagiário</Option>
                            </Select>
                            <Span>{errors.subject?.message}</Span>
                        </FormGroup>
                    </Column>

                    <Column>
                        <FormGroup>
                            <Label>Endereço</Label>
                            <Input {...register('name')} type="text" />
                            <Span>{errors.name?.message}</Span>
                        </FormGroup>

                        <Row>
                            <FormGroup>
                                <Label>Bairro</Label>
                                <Input {...register('name')} type="text" />
                                <Span>{errors.name?.message}</Span>
                            </FormGroup>

                            <FormGroup>
                                <Label>Cidade</Label>
                                <Input {...register('name')} type="text" />
                                <Span>{errors.name?.message}</Span>
                            </FormGroup>
                        </Row>

                        <FormGroup>
                            <Label>CEP</Label>
                            <Input {...register('name')} type="text" />
                            <Span>{errors.name?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Complemento</Label>
                            <Input {...register('name')} type="text" />
                            <Span>{errors.name?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Envie seu currículo em Word ou PDF</Label>
                            <Input {...register('name')} type="file" />
                            <Span>{errors.name?.message}</Span>
                        </FormGroup>
                    </Column>
                </Row>

                <Button>Enviar</Button>
            </Form>
        </Container>
    )
}

export default CurriculumRegistration
