import styles from './index.module.sass';

import {IButton} from "./index.interfaces";
import cn from "classnames/bind";
import classNames from "classnames/bind"; classNames();

const cx = cn.bind(styles);


export const Button = (props: IButton) => {
    const { text, isDisabled, onClick, className, type, status = "primary", padding = '16', isActive } = props;

    return(
        <button
            disabled = { isDisabled }
            className = { cx( className, {
                primary: status === 'primary',
                secondary: status === 'secondary',
                tertiary: status === 'tertiary',
                size_10: padding === '10',
                size_12: padding === '12',
                size_16: padding === '16',
                active: isActive,
            })  }
            onClick = { onClick }
            type = { type }
        >
            { text }
        </button>
    )
}