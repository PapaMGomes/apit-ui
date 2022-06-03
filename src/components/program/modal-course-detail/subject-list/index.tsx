import React from 'react'
import { BsStopwatch } from 'react-icons/bs'
import { SubjectInterface } from '@/interfaces/course'
import { Container, Title, Content, Card, Text, Icon } from './styles'

interface SubjectListProps {
    title: string
    color?: string
    items: SubjectInterface[]
    workload: number | string
}

const SubjectList: React.FC<SubjectListProps> = props => {
    const { color, items, title, workload } = props

    return (
        <Container>
            <Title color={color}>
                {title}

                <Icon>
                    <BsStopwatch />
                    {workload} horas
                </Icon>
            </Title>

            <Content>
                {items.map((item, index) => (
                    <Card key={index}>
                        <Text>{item.title}</Text>
                        <Icon>
                            <BsStopwatch />
                            {item.workload}h
                        </Icon>
                    </Card>
                ))}
            </Content>
        </Container>
    )
}

export default SubjectList
