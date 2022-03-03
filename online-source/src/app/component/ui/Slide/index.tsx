import {FC} from "react";
import {ISlide} from "./index.interfaces";
import styles from './index.module.sass';

import cn from "classnames/bind";
import classNames from "classnames/bind";

const cx = cn.bind(styles);

export const Slide: FC<ISlide> = (props: ISlide) => {
    const {title, text, btn_text, color, img } = props
    return (
        <div className={ cx( styles.slide, {
            slide__blue: color === "blue",
            slide__green: color === "green",
            slide__yellow: color === "yellow"
        })  }>
            <div className={ styles.slide__info }>
                <h1 className={ styles.slide__title }>
                    { title }
                </h1>
                <p className={ styles.slide__text }>{ text }</p>
                <button className={ styles.slide__btn }>
                    { btn_text }
                </button>
            </div>
            <img className={ styles.slide__img } src={ img } alt=""/>
        </div>
    );
}