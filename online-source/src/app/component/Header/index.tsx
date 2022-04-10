import styles from './index.module.sass';

import {observer} from "mobx-react";
import {Navbar} from "../Navbar";
export const Header = observer ((props: any) => {

    return(
        <header className={ styles.header__wrapper}>
            <div className={ styles.wrapper }>
                <Navbar/>
            </div>
        </header>
    )
})