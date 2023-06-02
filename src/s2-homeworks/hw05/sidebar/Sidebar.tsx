import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'
import styled from 'styled-components';

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={open ? s.close : s.closeNotOpen} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>

                <nav id={'hw5-menu'} className={s.nav}>
                    <NavWrapper><NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                    >
                        Pre-junior
                    </NavLink></NavWrapper>
                    <NavWrapper><NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                    >
                        Junior
                    </NavLink></NavWrapper>
                    <NavWrapper><NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                    >
                        Junior Plus
                    </NavLink></NavWrapper>
                </nav>
            </aside>
        </>
    )
}

const NavWrapper = styled.div`
  margin-bottom: 20px;

  & > a {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    font-size: 22px;
  }

  & > a.active {
    text-decoration: underline;
    color: #0059B2;
  }

  & > a:hover {
    color: #58ACFF;
  }

`
