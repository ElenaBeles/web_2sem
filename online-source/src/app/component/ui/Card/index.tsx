import styles from './index.module.sass';
import {Icon} from "../Icon";
import {FC} from "react";
import {ICard} from "./index.interfaces";
import {Link} from "react-router-dom";
import cn from "classnames/bind";


const cx = cn.bind(styles);

export const Card: FC<ICard> = (props: ICard) => {
    const { title, text, img, link, className } = props
    return (
        <div className={cx(styles.card__wrapper, className)}>
            <div className={ styles.card__info }>
                <h3 className={ styles.card__title }>{ title }</h3>
                <p className={ styles.card__text }>{ text }</p>
                <button className={ styles.card__btn }>
                    <Link to = { link }>
                        <Icon name='next_additions' size = '48' />
                    </Link>
                </button>
            </div>
            <img className={ styles.card__img } src={ img } alt="map"/>
        </div>
    );
}