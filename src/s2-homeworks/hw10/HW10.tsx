import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import {Container, HwTitle} from '../../common/styles/container';

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading)
    const dispatch = useDispatch()


    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
        dispatch(loadingAC(true))

        // setTimeout
    }

    return (
        <div id={'hw10'}>
            <HwTitle className={s2.hwTitle}>Homework #10</HwTitle>

            <Container className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </Container>
        </div>
    )
}

export default HW10
