import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {Container, HwTitle} from '../../common/styles/container';

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const dispatch = useDispatch()
    const themeId = useSelector<any>(state => state.theme.themeId)
    const change = (id: number) => {
        dispatch(changeThemeId(+id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <HwTitle id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </HwTitle>

            <Container>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    options={themes}
                    onChange={(e) => {
                        change(+e.currentTarget.value)
                    }}
                />
            </Container>
        </div>
    )
}

export default HW12
