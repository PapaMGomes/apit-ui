import React, { useState } from 'react'
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
import ModalCourseDetail from '../modal-course-detail'

const Courses: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [course, setCourse] = useState<CourseInterface>({} as CourseInterface)

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
                        <Card key={index} onClick={() => selectCourse(item)}>
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
