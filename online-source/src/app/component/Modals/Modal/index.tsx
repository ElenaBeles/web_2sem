import styles from './index.module.sass';

import {FC, Ref, useRef} from "react";
import { Props } from "./index.intrefaces";

import close from "../../../../svg-icons/btn_close.svg";
import {useStores} from "../../../utils/use-stores-hook";
import {useModalClose} from "../../../utils/use-modal-close";
import {Portal} from "../../Portal";

export const Modal: FC<Props> = (props: any) => {
    const { title, onClose, children } = props;
    const { modalStore: { clearCurrentModal }} = useStores();
    const ref: Ref<any> = useRef();

    useModalClose(ref, () => clearCurrentModal())
    return (
        <Portal>
            <div className={ styles.overlay } ref ={ ref }>
                <div className={ styles.wrapper }>
                    <div className={styles.modal__title__wrapper }>
                        <h1 className={ styles.modal__title }>
                            {title}
                        </h1>
                        <button onClick={ onClose } className={ styles.modal__btn }>
                            <img src={ close } alt=""/>
                        </button>
                    </div>
                    <div className={styles.mainInfo__wrapper}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}