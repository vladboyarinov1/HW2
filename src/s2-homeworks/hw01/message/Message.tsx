import React, {FC} from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';
import {
    Time,
    Image,
    ImageAndText, ImageAndTime,
    MessageBlock,
    MessageName,
    MessageText, MessageTextBlock
} from '../../../common/styles/commonMessageStyle';

export type MessagePropsType = {
    message: MessageType
}

const Message: FC<MessagePropsType> = ({message}) => {
    return (
        <MessageBlock id={'hw1-message-' + message.id}>
            <ImageAndText>
                <ImageAndTime>
                    <Image id={'hw1-avatar-' + message.id} src={message.user.avatar} alt="avatar"/>
                    <Time id={'hw1-time-' + message.id}>
                        {message.message.time}
                    </Time>
                </ImageAndTime>
                <MessageText>
                    <MessageName id={'hw1-name-' + message.id}>
                        {message.user.name}
                    </MessageName>
                    <MessageTextBlock id={'hw1-text-' + message.id} className={s.messageText}>
                        {message.message.text}
                    </MessageTextBlock>
                </MessageText>
            </ImageAndText>
        </MessageBlock>
    )
}

export default Message
