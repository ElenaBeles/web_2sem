import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutCointainer";
import styles from "./index.module.sass";
import {Button} from "../../component/ui/Button";
import {useState} from "react";
import {useStores} from "../../utils/use-stores-hook";
import {CommodityCard} from "../../component/ui/CommodityCard";
import {ProductModel} from "../../models/ProductModel";
import {Checkbox} from "../../component/ui/Checkbox";

export interface IItem {
    name: string;
    checked: boolean;
    value?: string;
}

const allGender: IItem[] = [
    {name: "Мужской", checked: false, value: "man"},
    {name: "Женский", checked: false, value: "woman"},
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

enum BtnSorting {
    Popularity,
    ByPrice,
    Novelty
}

enum CheckboxSorting {
    Gender,
    Categories,
}


export const Ecomarket = observer(() => {
    const {commoditiesStore: {products}} = useStores();

    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const [formattedProductList, setFormattedProductList] = useState(products);

    const sortListProduct = (index: number) => {
        allSortings.map((value) => value.checked = false)
        allSortings[index].checked = true;
        if (index === BtnSorting.Popularity) {
            setFormattedProductList(formattedProductList.sort(comparePopularity))
        } else if (index === BtnSorting.ByPrice) {
            setFormattedProductList(formattedProductList.sort(compareCost))
        } else if (index === BtnSorting.Novelty) {
            setFormattedProductList(formattedProductList.sort(compareNovelty))
        }
    }
    const comparePopularity = (emp1: ProductModel, emp2: ProductModel) => {
        const emp1rating = emp1.rating;
        const emp2rating = emp2.rating;
        return emp1rating > emp2rating ? -1 : 1;
    }
    const compareCost = (emp1: ProductModel, emp2: ProductModel) => {
        const emp1cost = emp1.cost;
        const emp2cost = emp2.cost;
        return emp1cost > emp2cost ? 1 : -1;
    }
    const compareNovelty = (emp1: ProductModel, emp2: ProductModel) => {
        const emp1novelty = emp1.date;
        const emp2novelty = emp2.date;
        return emp1novelty > emp2novelty ? 1 : -1;
    }

    const resetFilters = () => {
        setFormattedProductList(products)
    }

    const currentFilters = new Map();
    currentFilters.set('gender', []);
    currentFilters.set('brand', []);

    const handleFormattedProductList = (indexEl: number, indexSorting: number) => {

        if (indexSorting === CheckboxSorting.Gender) {

            setGenders(genders.map((sorting: IItem, currentIndex: number) => (
                currentIndex === indexEl ?
                    {...sorting, checked: !sorting.checked}
                    : {...sorting, checked: sorting.checked})))

            if (!genders[indexEl].checked) {
                currentFilters.set('gender', currentFilters.get('gender').push())
            }
        } else if (indexSorting === CheckboxSorting.Categories) {
            setCategories(categories.map((sorting: IItem, currentIndex: number) => (
                currentIndex === indexEl ?
                    {...sorting, checked: !sorting.checked}
                    : {...sorting, checked: sorting.checked})))
        }
    }

    const [genders, setGenders] = useState(allGender)
    const [categories, setCategories] = useState(allCategories)

    return (
        <LayoutContainer>
            <div className={styles.wrapper}>
            </div>
            <div className={styles.title__info}>
                <h1 className={styles.title}>
                    Экомаркет
                </h1>
                <div className={styles.filters__header}>
                    {allSortings.map((sorting, index) => (
                        <Button
                            text={sorting.name}
                            type={"button"}
                            status={"tertiary"}
                            isActive={sorting.checked}
                            key={index}
                            onClick={(key) => {
                                sortListProduct(index)
                                console.log(sorting.checked)
                            }}/>
                    ))
                    }
                </div>
                <Button
                    className={styles.btn__filter}
                    text={"Фильтры"}
                    type={"button"}
                    status={"tertiary"}
                    onClick={() => setIsOpenFilters(!isOpenFilters)}
                />
            </div>

            <div className={styles.goods}>
                <div className={styles.wrapper__filters}>
                    <div className={styles.wrapper__filters__checkboxes}>
                        <div>
                            <h3 className={styles.wrapper__filters__title}>
                                Пол
                            </h3>
                            <div className={styles.wrapper__filters__section}>
                                {genders.map((filter, index) =>
                                    <Checkbox
                                        isChecked={filter.checked}
                                        checkHandler={() => handleFormattedProductList(index, 0)}
                                        text={filter.name}
                                        key={index}/>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.wrapper__filters__title}>
                                Тип товара
                            </h3>
                            <div className={styles.wrapper__filters__section}>
                                {categories.map((filter, index) =>
                                    <Checkbox
                                        isChecked={filter.checked}
                                        checkHandler={(e: any) => handleFormattedProductList(index, 1)}
                                        text={filter.name}
                                        index={index}/>
                                )}
                            </div>
                        </div>
                    </div>
                    <Button
                        className={styles.btn__reset}
                        text={"Сбросить фильтры"}
                        type={"button"}
                        status={"tertiary"}
                        onClick={() => resetFilters()}
                    />

                </div>
                <div className={styles.goods__items}>
                    {formattedProductList.map((product, index) => (
                        <CommodityCard
                            title={product.title}
                            category={product.category}
                            cost={product.cost}
                            posterImg={product.posterImg}
                            brand={product.brand}
                            key={product.id}
                        />
                    ))
                    }
                </div>
            </div>
        </LayoutContainer>
    )
})
