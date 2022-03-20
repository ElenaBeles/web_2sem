import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutCointainer";
import styles from "./index.module.sass";
import {Button} from "../../component/ui/Button";
import {Checkbox} from "../../component/ui/Checkbox";
import {useState} from "react";

interface IItem {
    name: string;
    checked: boolean;
}
const allGender: IItem[] = [
    { name: "Мужской", checked: false },
    { name: "Женский", checked: false },
]
const allCategories: IItem[] = [
    { name: "Одежда", checked: false },
    { name: "Обувь", checked: false },
    { name: "Аксессуары", checked: false },
]

export const Ecomarket = observer(() => {

    const [categories, setCategories] = useState(allCategories)
    const [genders, setGenders] = useState(allGender)
    const [allItemsCategories, setAllItemsCategories] = useState(false)
    const updateCheckStatus = (index: number, setItems: any, items: IItem[]) => {
        setItems(
            items.map((item: IItem, currentIndex: number) =>
                currentIndex === index ? {...item, checked: !item.checked} : item
            )
        )
    }

    const updateCheckStatusAll = ( allItems: boolean, setAllItems: any, setItems: any, items: IItem[] ) => {
        setAllItems(!allItems)
        setItems(
            items.map((item: IItem) =>
                allItems ? {...item, checked: false} :
                {...item, checked: true}
            )
        )
    }
    return (
        <LayoutContainer>
            <div className={ styles.wrapper }>
                <div className={ styles.title__info}>
                    <h1 className={ styles.title}>
                        Экомаркет
                    </h1>
                    <div>
                        <Button
                            text={"По популярности"}
                            type={"button"}
                            status={"tertiary"}/>
                        <Button
                            text={"По цене"}
                            type={"button"}
                            status={"tertiary"}
                            disabled={true}/>
                        <Button
                            text={"По новизне"}
                            type={"button"}
                            status={"tertiary"}
                            disabled={true}/>
                    </div>
                </div>
                <div className={ styles.goods }>
                    <div className={ styles.goods__wrapper }>
                        <div className={ styles.goods__filtration }>
                            <h3 className={ styles.goods__title }>
                                Пол
                            </h3>
                            {genders.map((gender, index) => (
                                <Checkbox
                                    className = { styles.checkboxes }
                                    isChecked={gender.checked}
                                    checkHandler={() => updateCheckStatus(index, setGenders, genders)}
                                    text={gender.name}
                                    index={index}
                                />
                            ))
                            }
                            <h3 className={ styles.goods__title }>
                                Тип товара
                            </h3>
                            <Checkbox
                                className = { styles.checkboxes }
                                isChecked={ allItemsCategories }
                                checkHandler={() => updateCheckStatusAll( allItemsCategories, setAllItemsCategories,setCategories, categories)}
                                text={ "Выбрать всё"}
                            />
                            {categories.map((category, index) => (
                                <Checkbox
                                    className = { styles.checkboxes }
                                    isChecked={category.checked}
                                    checkHandler={() => updateCheckStatus(index, setCategories, categories)}
                                    text={category.name}
                                    index={index}
                                />
                            ))
                            }
                        </div>
                    </div>
                        <div className={ styles.goods__items }>

                        </div>
                </div>
            </div>
        </LayoutContainer>
    )
})