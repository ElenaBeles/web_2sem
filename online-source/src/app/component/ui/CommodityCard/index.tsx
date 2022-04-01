import {FC} from "react";
import styles from "./index.module.sass";
import {ICommodityCard} from "./index.interfaces";
import {Cost} from "../Cost";

export const CommodityCard: FC<ICommodityCard> = (props: ICommodityCard) => {
    const { title, category, cost, posterImg, brand } = props
    return (
        <div className={ styles.card__wrapper }>
            <img src={ posterImg } alt=""/>
            <p className={ styles.card__title }>{ title }</p>
            <p className={ styles.card__category }>{ category }</p>
            <Cost cost={ cost}/>
            <div className={ styles.card__brand__wrapper }>
                <p className={ styles.card__brand }>{ brand }</p>
            </div>
        </div>
    );
}