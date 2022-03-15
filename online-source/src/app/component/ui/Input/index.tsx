import styles from './index.module.sass';
import {IInput} from "./index.interfaces";

import cn from "classnames/bind";

const cx = cn.bind(styles);

export const Input = ( props : IInput ) => {
    const { value, onChange, placeholder, type = 'text',  className, isError } = props;

    return(
        <input
            type = { type }
            placeholder = { placeholder }
            value = { value }
            onChange = { onChange }
            className={cx(styles.input, className,{
                    inputError: isError
                }
            )}
        />
    )
}