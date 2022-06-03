import React, { useState } from 'react'
import Theme from '@/styles/css/ts/theme'
import { CourseInterface } from '@/interfaces/course'
import ModalCourseDetail from '../modal-course-detail'
import BgRetail from '@/assets/images/program/retail.jpg'
import BgLogistics from '@/assets/images/program/logistics.jpg'
import BgManagement from '@/assets/images/program/management.jpg'
import {
    Container,
    Content,
    Card,
    CardBody,
    CardTitle,
    Image,
    Title,
    Button,
    ImageContainer
} from './styles'

const Courses: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [course, setCourse] = useState<CourseInterface>({} as CourseInterface)

    const courses: CourseInterface[] = [
        {
            image: BgManagement,
            title: 'Administração',
            color: Theme.colors.purple,
            basic: [
                { title: 'Cidadania e Participação Social', workload: 36 },
                { title: 'Direito do Trabalho', workload: 26 },
                { title: 'Educação para o Trabalho', workload: 40 },
                { title: 'Matemática Aplicada e Financeira', workload: 50 },
                { title: 'Português e Redação Comercial', workload: 56 }
            ],
            specific: [
                { title: 'Gestão Empresarial', workload: 50 },
                { title: 'Introdução a Administração', workload: 20 },
                { title: 'Administração Financeira', workload: 20 },
                { title: 'Contabilidade Geral', workload: 24 },
                { title: 'Administração de RH', workload: 20 },
                { title: 'Administração e Marketing', workload: 30 },
                { title: 'Economia e Mercado de Capitais', workload: 40 },
                { title: 'Administração de Materiais e Produtos', workload: 24 }
            ]
        },
        {
            image: BgLogistics,
            title: 'Logística',
            color: Theme.colors.red,
            basic: [
                { title: 'Português e Redação Comercial', workload: 40 },
                { title: 'Competências  básicas', workload: 40 },
                { title: 'Cidadania e Participação social', workload: 20 },
                {
                    title: 'Contextualização Teorico-Pratica de aprendizagem',
                    workload: 36
                },
                {
                    title: 'Gestão de Pessoas aplicada a logística',
                    workload: 32
                },
                { title: 'Matemática Financeira e Contabilidade', workload: 40 }
            ],
            specific: [
                {
                    title: 'Logística de Armazenagem e Gestão de Estoques',
                    workload: 20
                },
                { title: 'Planejamento estratégico e logístico', workload: 14 },
                {
                    title: 'Sistema de canais de Marketing e Logística',
                    workload: 16
                },
                { title: 'Logística no Comercio exterior', workload: 16 },
                {
                    title: 'Tecnologia da informação em Logística',
                    workload: 16
                },
                { title: 'Estratégia do transporte', workload: 16 },
                {
                    title: 'Legislação aplicada logística e ética',
                    workload: 16
                },
                { title: 'Logística Integrada', workload: 16 },
                { title: 'Gestão de logística reversa', workload: 16 },
                { title: 'Gestão da cadeia de suprimentos', workload: 16 },
                { title: 'Gestão de Custos logísticos', workload: 16 },
                { title: 'Administração da produção', workload: 14 },
                { title: 'Gestão ambiental', workload: 16 }
            ]
        },
        {
            image: BgRetail,
            title: 'Varejo',
            color: Theme.colors.orange,
            basic: [
                { title: 'Português e Redação Comercia', workload: 46 },
                {
                    title: 'Contextualização Teórica-Pratica de Aprendizagem',
                    workload: 40
                },
                { title: 'Cidadania e Participação social', workload: 32 },
                { title: 'Matemática aplicada e Financeira', workload: 50 },
                { title: 'Educação e Direito do trabalho', workload: 40 }
            ],
            specific: [
                { title: 'Gestão de Varejo', workload: 24 },
                { title: 'Marketing no varejo', workload: 48 },
                { title: 'Logística e estoque', workload: 40 },
                { title: 'Tecnologia da informação', workload: 48 },
                { title: 'Logística e Transporte', workload: 48 }
            ]
        }
    ]

    const selectCourse = (course: CourseInterface) => {
        setCourse(course)
        setIsModalOpen(true)
    }

    return (
        <>
            <Container>
                <Title>Cursos</Title>

                <Content>
                    {courses.map((item, index) => (
                        <Card
                            key={index}
                            color={item.color}
                            onClick={() => selectCourse(item)}
                        >
                            <ImageContainer>
                                <Image src={item.image} alt={item.title} />
                            </ImageContainer>

                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <Button>Ver mais</Button>
                            </CardBody>
                        </Card>
                    ))}
                </Content>
            </Container>

            <ModalCourseDetail
                course={course}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default Courses
