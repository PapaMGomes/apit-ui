import React from 'react'
import { CourseInterface } from '@/interfaces/course'
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
    const courses: CourseInterface[] = [
        {
            image: BgManagement,
            title: 'Administração'
        },
        {
            image: BgLogistics,
            title: 'Logística'
        },
        {
            image: BgRetail,
            title: 'Varejo'
        }
    ]

    return (
        <Container>
            <Title>Cursos</Title>

            <Content>
                {courses.map((item, index) => (
                    <Card key={index}>
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
    )
}

export default Courses
