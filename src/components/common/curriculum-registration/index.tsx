import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { STATES } from '@/constants/state.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { DELEGATE } from '@/constants/delegate.constant'
import { CurriculumRegistrationInterface } from '@/interfaces/curriculum-registration.interface'
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

const CurriculumRegistration: React.FC = () => {
    const curriculumRegistrationForm = yup.object().shape({
        complement: yup.string(),
        cep: yup.string().required('Insira o CEP'),
        sex: yup.string().required('Insira o sexo'),
        city: yup.string().required('Insira a cidade'),
        email: yup.string().required('Insira um email'),
        state: yup.string().required('Insira o estado'),
        name: yup.string().required('Insira o seu nome'),
        file: yup.string().required('Insira um arquivo'),
        address: yup.string().required('Insira o endereço'),
        telephone: yup.string().required('Insira o seu telefone'),
        vacancyType: yup.string().required('Insira o tipo da vaga'),
        birthDate: yup.string().required('Insira a data de nascimento')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CurriculumRegistrationInterface>({
        resolver: yupResolver(curriculumRegistrationForm)
    })

    const handleSubmitForm = (curriculumRegistrationFormData: any) => {
        console.log(curriculumRegistrationFormData)
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
                                <Select {...register('sex')}>
                                    <Option value="">Selecione</Option>
                                    <Option>Masculino</Option>
                                    <Option>Feminino</Option>
                                </Select>
                                <Span>{errors.sex?.message}</Span>
                            </FormGroup>

                            <FormGroup>
                                <Label>Data de nascimento</Label>
                                <Input {...register('birthDate')} type="date" />
                                <Span>{errors.birthDate?.message}</Span>
                            </FormGroup>
                        </Row>

                        <FormGroup>
                            <Label>E-mail</Label>
                            <Input {...register('email')} type="email" />
                            <Span>{errors.email?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Telefone (celular)</Label>
                            <Input {...register('telephone')} type="text" />
                            <Span>{errors.telephone?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Tipo de vaga pretendida</Label>
                            <Select {...register('vacancyType')}>
                                <Option value="">Selecione</Option>
                                <Option>Aprendiz</Option>
                                <Option>Estagiário</Option>
                            </Select>
                            <Span>{errors.vacancyType?.message}</Span>
                        </FormGroup>
                    </Column>

                    <Column>
                        <FormGroup>
                            <Label>Endereço</Label>
                            <Input {...register('address')} type="text" />
                            <Span>{errors.address?.message}</Span>
                        </FormGroup>

                        <Row>
                            <FormGroup>
                                <Label>Cidade</Label>
                                <Input {...register('city')} type="text" />
                                <Span>{errors.city?.message}</Span>
                            </FormGroup>

                            <FormGroup>
                                <Label>Estado</Label>
                                <Select {...register('state')}>
                                    <Option value="">Selecione</Option>

                                    {STATES.map((item, index) => (
                                        <Option key={index} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                                <Span>{errors.state?.message}</Span>
                            </FormGroup>
                        </Row>

                        <FormGroup>
                            <Label>CEP</Label>
                            <Input {...register('cep')} type="text" />
                            <Span>{errors.cep?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Complemento</Label>
                            <Input {...register('complement')} type="text" />
                            <Span>{errors.complement?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Envie seu currículo em Word ou PDF</Label>
                            <Input {...register('file')} type="file" />
                            <Span>{errors.file?.message}</Span>
                        </FormGroup>
                    </Column>
                </Row>

                <Button>Enviar</Button>
            </Form>
        </Container>
    )
}

export default CurriculumRegistration
