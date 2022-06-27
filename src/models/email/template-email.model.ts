import { CurriculumRegistrationInterface } from '@/interfaces/curriculum-registration.interface'
import { PartnerCompanyFormInterface } from '@/interfaces/partner-company-form.interface'
import { ContactInterface } from '@/interfaces/contact.interface'

import CURRICULUM_TEMPLATE from './templates/curriculum'
import COMPANY_TEMPLATE from './templates/company'
import CONTACT_TEMPLATE from './templates/contact'

export class TemplateEmailModel {
    curriculum(model: CurriculumRegistrationInterface) {
        delete model.file
        let template = CURRICULUM_TEMPLATE

        for (const [key, value] of Object.entries(model)) {
            template = template.replace(`#{${key}}`, value)
        }

        return template
    }
    company(model: PartnerCompanyFormInterface) {
        let template = COMPANY_TEMPLATE

        for (const [key, value] of Object.entries(model)) {
            template = template.replace(`#{${key}}`, value)
        }

        return template
    }
    contact(model: ContactInterface) {
        let template = CONTACT_TEMPLATE

        for (const [key, value] of Object.entries(model)) {
            template = template.replace(`#{${key}}`, value)
        }

        return template
    }
}
