import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'
import {Container} from '../../../common/styles/container';

type PropsType = {
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({handleOpen}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const location = useLocation()
    const currentPath = location.pathname

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error'
    return (
        <>
            <header className={s.header}>
                <div id={'hw5-header'} className={s.headerBlock} >
                    <img
                        src={burgerIcon}
                        id={'hw5-burger-menu'}
                        className={s.burgerMenuIcon}
                        onClick={handleOpen}
                        alt={'open menu'}
                    />
                    <h1>{pageName}</h1>
                </div>
            </header>

        </>
    )
}
