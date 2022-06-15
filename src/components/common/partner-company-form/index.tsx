import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { STATES } from '@/constants/state.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { DELEGATE } from '@/constants/delegate.constant'
import { PartnerCompanyFormInterface } from '@/interfaces/partner-company-form.interface'
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
    Option,
    Textarea
} from './styles'

const PartnerCompanyForm: React.FC = () => {
    const interestOptions = [
        { name: 'Aprendiz' },
        { name: 'Estagiário' },
        { name: 'Aprendiz e Estagiário' }
    ]

    const howDidFindOptions = [
        { name: 'Indicação' },
        { name: 'Internete' },
        { name: 'Divulgação Institucional' },
        { name: 'Notícia' },
        { name: 'Comunicado Eletrônico' },
        { name: 'Anúncio' },
        { name: 'Escola ou Instituto Social' },
        { name: 'Outros' }
    ]

    const partnerCompanyForm = yup.object().shape({
        howDidFind: yup.string(),
        city: yup.string().required('Insira a cidade'),
        state: yup.string().required('Insira o estado'),
        email: yup.string().required('Insira um email'),
        district: yup.string().required('Insira o bairro'),
        interest: yup.string().required('Insira o interesse'),
        telephone: yup.string().required('Insira um telefone'),
        message: yup.string().required('Insira a sua mensagem'),
        company: yup.string().required('Insira o nome da empresa'),
        representative: yup.string().required('Insira o nome do representante')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PartnerCompanyFormInterface>({
        resolver: yupResolver(partnerCompanyForm)
    })

    const handleSubmitForm = (partnerCompanyFormData: any) => {
        console.log(partnerCompanyFormData)
    }

    return (
        <Container id={DELEGATE.partnerCompanyRegistration}>
            <Title>Seja uma empresa parceira</Title>

            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <Row>
                    <Column>
                        <Row>
                            <FormGroup>
                                <Label>Empresa</Label>
                                <Input {...register('company')} type="text" />
                                <Span>{errors.company?.message}</Span>
                            </FormGroup>

                            <FormGroup>
                                <Label>Representante</Label>
                                <Input
                                    {...register('representative')}
                                    type="text"
                                />
                                <Span>{errors.representative?.message}</Span>
                            </FormGroup>
                        </Row>

                        <FormGroup>
                            <Label>Telefone</Label>
                            <Input {...register('telephone')} type="text" />
                            <Span>{errors.telephone?.message}</Span>
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
                            <Label>Bairro</Label>
                            <Input {...register('district')} type="text" />
                            <Span>{errors.district?.message}</Span>
                        </FormGroup>

                        <Row>
                            <FormGroup>
                                <Label>Interesse em</Label>
                                <Select {...register('interest')}>
                                    <Option value="">Selecione</Option>
                                    {interestOptions.map((item, index) => (
                                        <Option key={index} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                                <Span>{errors.interest?.message}</Span>
                            </FormGroup>

                            <FormGroup>
                                <Label>Como conheceu a APIT?</Label>
                                <Select {...register('howDidFind')}>
                                    <Option value="">Selecione</Option>
                                    {howDidFindOptions.map((item, index) => (
                                        <Option key={index} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                                <Span>{errors.howDidFind?.message}</Span>
                            </FormGroup>
                        </Row>
                    </Column>

                    <Column>
                        <FormGroup>
                            <Label>E-mail</Label>
                            <Input {...register('email')} type="email" />
                            <Span>{errors.email?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Mensagem</Label>
                            <Textarea {...register('message')} rows={9} />
                            <Span>{errors.message?.message}</Span>
                        </FormGroup>

                        <Button type="submit">Enviar</Button>
                    </Column>
                </Row>
            </Form>
        </Container>
    )
}

export default PartnerCompanyForm