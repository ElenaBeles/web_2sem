import styles from './index.module.sass';

import {IButton} from "./index.interfaces";
import cn from "classnames/bind";
import classNames from "classnames/bind"; classNames();

const cx = cn.bind(styles);


export const Button = (props: IButton) => {
    const { text, disabled, onClick, className, type, status = "primary" } = props;

    return(
        <button
            disabled = { disabled }
            className = { cx( className, {
                primary: status === 'primary',
                secondary: status === 'secondary'
            })  }
            onClick = { onClick }
            type = { type }
        >
            { text }
        </button>
    )
}