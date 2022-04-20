import styles from './index.module.sass';
import {Icon} from "../../ui/Icon";
import {Button} from "../../ui/Button";
import {Checkbox} from "../../ui/Checkbox";
import {CheckboxGroup} from "../../ui/Checkbox-group";
import {useStores} from "../../../utils/use-stores-hook";
import {useState} from "react";
import {IItem} from "../../../pages/Ecomarket";


const allGender: IItem[] = [
    {name: "Мужской", checked: false},
    {name: "Женский", checked: false},
]
const allCategories: IItem[] = [
    {name: "Одежда", checked: false},
    {name: "Обувь", checked: false},
    {name: "Аксессуары", checked: false},
]
const allSortings: IItem[] = [
    {name: "По популярности", checked: false},
    {name: "По цене", checked: false},
    {name: "По новизне", checked: false},
]

interface IFilterHeader {
    className?: string;
}

export const FiltersHeader = (props: IFilterHeader) => {
    const { className } = props;

    /* нерабочая фильтрация */
    const [categories, setCategories] = useState(allCategories)
    const [genders, setGenders] = useState(allGender)
    const [sortings, setSorting] = useState(allSortings)
    const updateCheckStatus = (index: number, setItems: any, items: IItem[]) => {
        setItems(
            items.map((item: IItem, currentIndex: number) =>
                currentIndex === index ? {...item, checked: !item.checked} : item
            )
        )
    }
    const handleClickSort = (index: number) => {
        setSorting(sortings.map((sorting: IItem, currentIndex: number) => currentIndex === index ?
            {...sorting, checked: true}
            : {...sorting, checked: false}))
    }
    /* нерабочая фильтрация */

    return(
        <div className={ className }>
            {allSortings.map((sorting, index) => (
                <Button
                    text={sorting.name}
                    type={"button"}
                    status={"tertiary"}
                    isActive={sorting.checked}
                    onClick={() => {
                        handleClickSort(index)
                        console.log(sorting.checked)
                    }}/>
            ))
            }
        </div>
    )
}