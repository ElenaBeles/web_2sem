import styles from './index.module.sass';

import {FC} from "react";
import { Props } from "./index.intrefaces";

import close from "../../../../svg-icons/btn_close.svg";

export const Modal: FC<Props> = (props: any) => {
    const { title, onClose, children } = props;
    return (
        <div className={ styles.wrapper }>
            <div className={styles.modal__title__wrapper}>
                <h1 className={ styles.modal__title}>
                    {title}
                </h1>
                <button onClick={onClose} className={ styles.modal__btn }>
                    <img src={close} alt=""/>
                </button>
            </div>
            <div className={styles.mainInfo__wrapper}>
                {children}
            </div>
        </div>
    )
}