import React from 'react'
import AppModal from '@/components/common/app-modal'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'
import { CourseInterface, SubjectInterface } from '@/interfaces/course'
import SubjectList from '@/components/program/modal-course-detail/subject-list'

import { Container, Header, Title, Icon, Subtitle, Body } from './styles'
import Theme from '@/styles/css/ts/theme'
import { BsStopwatch } from 'react-icons/bs'

interface ModalCourseDetailProps extends AppModalInterface {
    course: CourseInterface
}

const ModalCourseDetail: React.FC<ModalCourseDetailProps> = props => {
    const { isOpen, onBackdropClick, onClose, course } = props
    const getTotalSubjectWorkland = (list: SubjectInterface[]) => {
        if (!list) return 0
        return list.reduce((total, { workload }) => total + Number(workload), 0)
    }

    const totalWorkloadBasic = getTotalSubjectWorkland(course.basic)
    const totalWorkloadSpecific = getTotalSubjectWorkland(course.specific)
    const totalWorkloadCourse = totalWorkloadBasic + totalWorkloadSpecific

    return (
        <AppModal
            width="90vw"
            isOpen={isOpen}
            color={course.color}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
            containerStyle={{ padding: '0px 0px 2.5rem 0px' }}
            header={
                <Header color={course.color}>
                    <Title>
                        {course.title}
                        <Icon>
                            {totalWorkloadCourse}h
                            <BsStopwatch />
                        </Icon>
                    </Title>

                    <Subtitle>Confira as diciplinas do curso</Subtitle>
                </Header>
            }
        >
            <Container>
                <Body>
                    <SubjectList
                        title="Básico"
                        items={course.basic}
                        color={Theme.colors.blue}
                        workload={totalWorkloadBasic}
                    />
                    <SubjectList
                        title="Específico"
                        items={course.specific}
                        color={Theme.colors.red}
                        workload={totalWorkloadSpecific}
                    />
                </Body>
            </Container>
        </AppModal>
    )
}

export default ModalCourseDetail
