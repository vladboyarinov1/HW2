import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'
import {Container, HwTitle} from '../../common/styles/container';


/*
* 1 - описать типы AffairPriorityType, AffairType+
* 2 - указать нужный тип для defaultAffairs+
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами+
* 4 - выполнить пункт 3 для функции deleteAffair+
* 5 - указать нужный тип в useState с affairs+
* 6 - дописать тип и логику функции deleteAffairCallback+
* 7 - в файле Affairs.tsx дописать типизацию пропсов+
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow+
* 9 - в файле Affair.tsx дописать типизацию пропсов+
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать+
* 11 - в файле Affair.tsx отобразить приходящие данные+
* */

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    switch (filter) {
        case 'low':
            return affairs = affairs.filter(affair => affair.priority === 'low')
        case 'middle':
            return affairs = affairs.filter(affair => affair.priority === 'middle')
        case 'high':
            return affairs = affairs.filter(affair => affair.priority === 'high')
        default:
            return affairs
    }
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(affairs => affairs._id !== _id)

}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div>
            <div style={{border: '1px solid #D9D9D9'}}></div>
            <HwTitle className={s2.hwTitle}>Homework #2</HwTitle>
            <div style={{border: '1px solid #D9D9D9'}}></div>
            <Container id={'hw2'}>
                <div className={s2.hw}>
                    <Affairs
                        data={filteredAffairs}
                        setFilter={setFilter}
                        deleteAffairCallback={deleteAffairCallback}
                        filter={filter}
                    />
                </div>
            </Container>
            <div style={{border: '1px solid #D9D9D9'}}></div>
        </div>
    )
}

export default HW2
