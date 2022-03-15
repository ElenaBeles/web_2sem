import styles from './index.module.sass';
import {Icon} from "../Icon";
import {FC} from "react";
import {ICard} from "./index.interfaces";
import {Link} from "react-router-dom";

export const Card: FC<ICard> = (props: ICard) => {
    const { title, text, img, link } = props
    return (
        <div className={ styles.card__wrapper }>
            <div className={ styles.card__info }>
                <h3 className={ styles.card__title }>{ title }</h3>
                <p className={ styles.card__text }>{ text }</p>
                <Link to = { link }>
                    <button className={ styles.card__btn }>
                        <Icon name='next_additions' size = '48' />
                    </button>
                </Link>
                <Link to = { link }/>
            </div>
            <img className={ styles.card__img } src={ img } alt="map"/>
        </div>
    );
}