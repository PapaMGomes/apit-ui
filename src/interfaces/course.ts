export interface CourseInterface {
    image: string
    title: string
    color: string
    basic: SubjectInterface[]
    specific: SubjectInterface[]
}

export interface SubjectInterface {
    title: string
    workload: number | string
}
