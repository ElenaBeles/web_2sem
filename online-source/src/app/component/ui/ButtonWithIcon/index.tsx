import styles from './index.module.sass';
import {FC} from "react";
import {IButtonWithIcon} from "./index.interfaces";
import {Icon} from "../Icon";


export const ButtonWithIcon: FC<IButtonWithIcon> = (props: any) => {
    const { text, type = 'button' , name, onClick } = props;

    return(
        <button
            type={ type }
            className={ styles.wrapper }
            onClick={ onClick }
        >
            <Icon name = { name } size={ '24' }/>
            <p>{ text }</p>
        </button>
    )
}