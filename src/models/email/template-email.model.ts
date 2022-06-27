import { CurriculumRegistrationInterface } from '@/interfaces/curriculum-registration.interface'
import { PartnerCompanyFormInterface } from '@/interfaces/partner-company-form.interface'
import { ContactInterface } from '@/interfaces/contact.interface'

import CURRICULUM_TEMPLATE from './templates/curriculum'
import COMPANY_TEMPLATE from './templates/company'
import CONTACT_TEMPLATE from './templates/contact'

type TemplateModelTypes =
    | CurriculumRegistrationInterface
    | PartnerCompanyFormInterface
    | ContactInterface
export class TemplateEmailModel {
    private buildTemplate(template: string, model: TemplateModelTypes) {
        for (const [key, value] of Object.entries(model)) {
            template = template.replace(`#{${key}}`, value)
        }

        return template
    }

    curriculum(model: CurriculumRegistrationInterface) {
        delete model.file
        return this.buildTemplate(CURRICULUM_TEMPLATE, model)
    }
    company(model: PartnerCompanyFormInterface) {
        return this.buildTemplate(COMPANY_TEMPLATE, model)
    }
    contact(model: ContactInterface) {
        return this.buildTemplate(CONTACT_TEMPLATE, model)
    }
}
