import { CurriculumRegistrationInterface } from '@/interfaces/curriculum-registration.interface'
import CURRICULUM from './templates/curriculum'

export class TemplateEmailModel {
    curriculum(model: CurriculumRegistrationInterface) {
        delete model.file
        let template = CURRICULUM

        for (const [key, value] of Object.entries(model)) {
            template = template.replace(`#{${key}}`, value)
        }

        return template
    }
}
