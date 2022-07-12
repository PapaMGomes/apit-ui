import React from 'react';
import { Container, Image } from './styles';
import AvatarImage from '@/assets/images/event/event-avatar.png'

const EventAvatar: React.FC = () => {
  return (
    <Container>
        <Image src={AvatarImage} alt="Em breve"/>
    </Container>
  )
}

export default EventAvatar;