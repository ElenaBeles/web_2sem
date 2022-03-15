import styles from './index.module.sass';
import cn from "classnames/bind";
import classNames from "classnames/bind";
import { ICustomLink } from "./index.interfaces";
import { Link, useMatch, useResolvedPath } from "react-router-dom"; classNames();

const cx = cn.bind(styles);

export const CustomLink = ( props : ICustomLink ) => {
    const { to, className, children } = props;

    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});
    return(
        <Link
            to={to}
            className={cx(styles.link, className,{
                    linkActive: match
                }
            )}>
            {children}
        </Link>
    )
}