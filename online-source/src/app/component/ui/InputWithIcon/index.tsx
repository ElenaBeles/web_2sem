import styles from './index.module.sass';
import {IInputWithIcon} from "./index.interfaces";

import cn from "classnames/bind";
import {FC} from "react";
import {ICard} from "../Card/index.interfaces";
import {Icon} from "../Icon";

const cx = cn.bind(styles);

export const InputWithIcon: FC<IInputWithIcon> = (props: IInputWithIcon) => {
    const { value, onChange, placeholder, type = 'text',  className, isError, img } = props;

    return(
        <div className={ cx(styles.wrapper, className)}>
            <img src={ img } alt=""/>
            <input
                type = { type }
                placeholder = { placeholder }
                value = { value }
                onChange = { onChange }
                className={cx(styles.input, className)}
            />
        </div>
    )
}