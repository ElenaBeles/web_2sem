import styles from './index.module.sass';

import {ICost} from "./index.interfaces";
import {FC} from "react";
import {Icon} from "../Icon";



export const Cost: FC<ICost> = (props: ICost) => {
    const { cost, size } = props;

    return(
        <div className={ styles.cost__wrapper }>
            <Icon size={ size } name={ "cost" }/>
            <p className={ styles.cost }>{ cost }</p>
        </div>
    )
}