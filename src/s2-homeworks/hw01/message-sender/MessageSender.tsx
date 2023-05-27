import React, {useEffect, useRef, useState} from 'react'
import { message0 } from '../HW1'
import s from './MessageSender.module.css'
import styled from 'styled-components';

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [text])

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m} />
            ))}

            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <Textarea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={textareaRef}

                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Button
                    id={'hw1-button'}
                    className={s.button}

                    onClick={addMessage}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </Button>
            </div>
        </>
    )
}

export default MessageSender

let Textarea = styled.textarea`
  width: calc(100% - 150px); /* вычитаем ширину кнопки */
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1);
  background: #F5F7FB;
  border: none;
  font-size: 16px;
  resize: none;
  float: left; /* добавляем плавающий элемент */
  margin-right: 10px; /* добавляем отступ справа */
  @media screen and (max-width: 760px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`
let Button = styled.button`
  background-color: #0066CC;
  width: 120px;
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  float: right; /* добавляем плавающий элемент */

  &:hover {
    background-color: #0052A3;
  }

  @media screen and (max-width: 760px) {
    float: none;
    display: block;
    margin: 0 auto;
  }
`
