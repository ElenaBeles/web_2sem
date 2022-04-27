import styles from './index.module.sass';
import {FC, useState} from "react";
import {ICheckbox} from "./index.interfaces";

import cn from "classnames/bind";
import classNames from "classnames/bind"; classNames();

const cx = cn.bind(styles);

export const Checkbox: FC<ICheckbox> = (props: ICheckbox) => {
    const { text, index, className, isChecked, checkHandler} = props

    return (
        <div className = { cx( styles.checkbox__wrapper, className) }>
            <input type="checkbox"
                   id={`checkbox-${index}`}
                   checked={isChecked}
                   onChange={ checkHandler }
                   className={ styles.checkbox }
            />
            <label className={ styles.checkbox__title }
                   htmlFor="checkbox" onClick={checkHandler}>{ text }</label>
        </div>
    )
}