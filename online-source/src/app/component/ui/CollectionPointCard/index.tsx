import styles from './index.module.sass';
import {FC} from "react";
import {ICollectionPointCard} from "./index.interfaces";

export const CollectionPointCard: FC<ICollectionPointCard> = (props: ICollectionPointCard) => {
    const { materials, address, img } = props
    return (
        <div className={ styles.card__wrapper }>
            <img className={ styles.card__img } src={ img } alt="card"/>
            <div className={ styles.card__info }>
                <h4 className={ styles.card__info__title }>{ address }</h4>
                <p className={ styles.card__info__text }>{ materials }</p>
            </div>
        </div>
    );
}