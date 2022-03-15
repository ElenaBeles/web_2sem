import { ICustomLink } from "../index.interfaces";
import { Link } from "react-router-dom";
import styles from "../index.module.sass";

import cn from "classnames/bind";

const cx = cn.bind(styles);


export const LinkAuth = ( props : ICustomLink ) => {
    const { to, className, children } = props;

    return(
        <Link
            to = {to}
            className = { cx(styles.link, className) }>
            { children }
        </Link>
    )
}