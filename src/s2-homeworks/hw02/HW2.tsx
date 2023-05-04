import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 6, name: 'java script', priority: 'high'},
    {_id: 7, name: 'read', priority: 'low'},
    {_id: 8, name: 'swim', priority: 'middle'},
    {_id: 9, name: 'sleep', priority: 'middle'},
    {_id: 10, name: 'coding', priority: 'high'},
]

// pure helper functions
export const filterAffairs = (affairs:  AffairType[], filter: FilterType):  AffairType[] => { // need to fix any
    if (filter === 'low') {
        return affairs.filter((a) => a.priority==='low')
    }
    if (filter === 'high') {
        return affairs.filter((a) => a.priority==='high')
    }

    if (filter === "middle") {
        return affairs.filter((a) => a.priority==='middle')
    }

        return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    const deleteAffair = affairs.filter(t => t._id !== _id)
    return deleteAffair
}

function HW2() {
    const [affairs, setAffairs] = useState< AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)


    const deleteAffairCallback = (_id: number): void => {
        const deleteTask= deleteAffair(affairs, _id)
        setAffairs(deleteTask)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
