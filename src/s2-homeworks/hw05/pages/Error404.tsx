import React from 'react'
import s from './Error404.module.css'
import error404 from './404.svg'
import {Container} from '../../../common/styles/container';

const Error404 = () => {
    return (
        <div id={'hw5-page-404'}>
            <Container className={s.wrapper}>
                <img src={error404} alt={'404'} className={s.error404}/>
            </Container>
        </div>
    )
}

export default Error404
