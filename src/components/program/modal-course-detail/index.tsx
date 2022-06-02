import React from 'react'
import AppModal from '@/components/common/app-modal'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'
import { CourseInterface } from '@/interfaces/course'

// import { Container } from './styles';

interface ModalCourseDetailProps extends AppModalInterface {
    course: CourseInterface
}

const ModalCourseDetail: React.FC<ModalCourseDetailProps> = props => {
    const { isOpen, onBackdropClick, onClose, course } = props

    return (
        <AppModal
            width="90vw"
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
        >
            <div>{course.title}</div>
        </AppModal>
    )
}

export default ModalCourseDetail
