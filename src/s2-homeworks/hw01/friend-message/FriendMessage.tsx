import React, {FC} from 'react'
import {MessageType} from '../HW1';
import {
    Image,
    ImageAndText,
    ImageAndTime,
    MessageBlock, MessageTextBlock, MessageName,
    Time
} from '../../../common/styles/commonMessageStyle';
import styled from 'styled-components';

type FriendMessagePropsType = {
    message: MessageType
}

const FriendMessage: FC<FriendMessagePropsType> = (props) => {
    const {message} = props
    return (
        <FriendMessageBlock id={'hw1-friend-message-' + message.id}>
            <FriendImageAndText>
                <FriendImageAndTime>
                    <Image id={'hw1-friend-avatar-' + message.id} src={message.user.avatar} alt="avatar"/>
                    <Time id={'hw1-friend-time-' + message.id}>
                        {message.message.time}
                    </Time>
                </FriendImageAndTime>
                <FriendMessageText>
                    <FriendMessageName id={'hw1-friend-name-' + message.id}>
                        {message.user.name}
                    </FriendMessageName>
                    <FriendMessageTextBlock id={'hw1-friend-text-' + message.id}>
                        {message.message.text}
                    </FriendMessageTextBlock>
                </FriendMessageText>
            </FriendImageAndText>
        </FriendMessageBlock>
    )
}
export default FriendMessage

let FriendMessageBlock = styled(MessageBlock)`
  justify-content: start;
`

let FriendImageAndText = styled(ImageAndText)`
  flex-direction: row;
`

let FriendImageAndTime = styled(ImageAndTime) `
  padding-right: 12px;
  padding-left: 0;
`

let FriendMessageText = styled.div`
  position: relative;
  background-color: #F5F7FB;
  border-radius: 6px 6px 0px 6px;
  padding: 7px 13px;
  max-width: 500px;


  *::before {
    content: "";
    position: absolute;
    left: -10px;
    bottom: 0px;
    border-width: 10px;
    border-style: solid;
    transform: rotate(90deg);
    border-color: transparent #F5F7FB transparent transparent;
  }

`
let FriendMessageTextBlock = styled(MessageTextBlock)`
    color: #000000;
`
let FriendMessageName = styled(MessageName) `
  color: #000000;
`





