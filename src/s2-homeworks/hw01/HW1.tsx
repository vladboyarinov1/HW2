import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import styled from 'styled-components';
import {Container, HwTitle} from '../../common/styles/container';

export type UserType = {
    avatar: string
    name: string
}
export type MessageItemType = {
    text: string
    time: string

}
export type MessageType = {
    id: number
    user: UserType
    message: MessageItemType

}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Vlad Boiarinov',
    },
    message: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quam!',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Anton Nosovich',
    },
    message: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quam!', // можно менять
        time: '22:00',
    },
}

const HW1 = () => {
    return (
        <HWContainer>
            <HwTitle>Homework #1</HwTitle>
            <div style={{border: '1px solid #D9D9D9'}}></div>
            <Container id={'hw1'}>
                <div className={s2.hw}>
                    <div>
                        <Message message={message0}/>
                        <FriendMessage message={friendMessage0}/>
                    </div>
                    <MessageSender M={Message}/>
                </div>
            </Container>
        </HWContainer>
    )
}
export default HW1

let HWContainer = styled.div`
  margin-bottom: 30px;
`


