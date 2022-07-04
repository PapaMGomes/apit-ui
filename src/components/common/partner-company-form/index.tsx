import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { STATES } from '@/constants/state.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmailService } from '@/services/email.service'
import { DELEGATE } from '@/constants/delegate.constant'
import { AlertService } from '@/services/_alert.service'
import { RECIPIENT_COMPANY } from '@/config/email.config'
import { TemplateEmailModel } from '@/models/email/template-email.model'
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
import { loadingControl } from '@/hooks/loading.hook'

const PartnerCompanyForm: React.FC = () => {
    const interestOptions = [{ name: 'Aprendiz' }]

    const howDidFindOptions = [
        { name: 'Indicação' },
        { name: 'Internet' },
        { name: 'Divulgação Institucional' },
        { name: 'Notícia' },
        { name: 'Comunicado Eletrônico' },
        { name: 'Anúncio' },
        { name: 'Escola ou Instituto Social' },
        { name: 'Outros' }
    ]

    const emailService = new EmailService()
    const alertService = new AlertService()
    const templateEmailModel = new TemplateEmailModel()
    const partnerCompanyForm = yup.object().shape({
        howDidFind: yup.string(),
        city: yup.string().required('Insira a cidade'),
        state: yup.string().required('Insira o estado'),
        email: yup.string().required('Insira um email'),
        district: yup.string().required('Insira o bairro'),
        address: yup.string().required('Insira o endereço'),
        interest: yup.string().required('Insira o interesse'),
        telephone: yup.string().required('Insira um telefone'),
        message: yup.string().required('Insira a sua mensagem'),
        company: yup.string().required('Insira o nome da empresa'),
        representative: yup.string().required('Insira o nome do representante')
    })

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PartnerCompanyFormInterface>({
        resolver: yupResolver(partnerCompanyForm)
    })

    const handleSubmitForm = async (model: PartnerCompanyFormInterface) => {
        try {
            loadingControl(true, 'Enviando email...')

            const emailDTO = {
                from: model.email,
                replyTo: model.email,
                to: RECIPIENT_COMPANY,
                subject: 'Parceiria',
                html: templateEmailModel.company(model)
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

                        <FormGroup>
                            <Label>Rua</Label>
                            <Input {...register('address')} type="text" />
                            <Span>{errors.address?.message}</Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Bairro</Label>
                            <Input {...register('district')} type="text" />
                            <Span>{errors.district?.message}</Span>
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
                    </Column>

                    <Column>
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
