import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import styled from 'styled-components';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;
import {blue, red} from '@mui/material/colors';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onBlur: () => void
    onEnter: (e: KeyboardEvent) => void
    error: string
    totalUsers: number
    lastUserName?: string
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    // const inputClass = error ? s.errorInput : s.input

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <CounterText className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </CounterText>

            <InputAndButtonContainer>
                <div>
                    <Input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        hasError={Boolean(error)}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <ErrorText id={'hw3-error'}>
                        {error}
                    </ErrorText>
                </div>

                <Button
                    id={'hw3-button'}
                    onClick={addUser}
                    disabled={!name.trim()}
                >
                    add
                </Button>
            </InputAndButtonContainer>

            {lastUserName && (
                <WelcomeText className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </WelcomeText>
            )}
        </div>
    )
}

export default Greeting

let CounterText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`
let InputAndButtonContainer = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
 
`
let Input = styled.input<{ hasError: boolean }>`
  width: 372px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid ${props => props.hasError ? '#CC0000' : '#D1D1D1'};
  padding: 8px 12px;
  margin-right: 12px;
  font-weight: 500;
  font-family: 'Montserrat';
  font-size: 16px;
  box-sizing: border-box;
  @media screen and (max-width: 670px){
    width: 255px;
  }
  &:focus {
    outline: none;
    margin-right: 5px;
  }
`

let ErrorText = styled.div`
  color:  #CC0000;


`

let Button = styled.button<{ disabled: boolean }>`
  width: 78px;
  height: 36px;
  background-color: #0066CC;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  border-radius: 3px;
  padding: 8px 24px;
  color: #FFFFFF;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`

let WelcomeText = styled.div`
  font-weight: 500;
  font-size: 14px;
`
