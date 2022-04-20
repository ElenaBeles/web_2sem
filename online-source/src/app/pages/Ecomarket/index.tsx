import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutCointainer";
import styles from "./index.module.sass";
import {Button} from "../../component/ui/Button";
import {useState} from "react";
import {useStores} from "../../utils/use-stores-hook";
import {CommodityCard} from "../../component/ui/CommodityCard";
import {BottomSheet} from 'react-spring-bottom-sheet'
import {FiltersHeader} from "../../component/Filters/FiltersHeader";

export interface IItem {
    name: string;
    checked: boolean;
}


export const Ecomarket = observer(() => {
    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const {commoditiesStore: {commodities}} = useStores();

    return (
        <LayoutContainer>
            <div className={styles.wrapper}>
            </div>
            <div className={styles.title__info}>
                <h1 className={styles.title}>
                    Экомаркет
                </h1>

                <FiltersHeader className={ styles.filters__header}/>

                <Button
                    className={ styles.btn__filter }
                    text={"Фильтры"}
                    type={"button"}
                    status={"tertiary"}
                    onClick={() => setIsOpenFilters(!isOpenFilters)}
                />

                <BottomSheet
                    className={ styles.bottom__sheet }
                    open={isOpenFilters}>
                    <FiltersHeader/>
                </BottomSheet>


            </div>
            <div className={styles.goods}>
                <div className={styles.goods__items}>
                    {commodities.map((commodity, index) => (
                        <CommodityCard
                            title={commodity.title}
                            category={commodity.category}
                            cost={commodity.cost}
                            posterImg={commodity.posterImg}
                            brand={commodity.brand}
                        />
                    ))
                    }
                </div>
            </div>
        </LayoutContainer>
    )
})