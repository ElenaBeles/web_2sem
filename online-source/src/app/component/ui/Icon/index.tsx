import styles from './index.module.sass';

import {FC} from "react";
import {IIcon} from "./index.interfaces";

export const Icon: FC<IIcon> = ({ className, name, size = 24 }) => {
    return (
        <svg
            className={ className }
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <use xlinkHref={`/sprite.svg#${name}`}/>
        </svg>
    );
}