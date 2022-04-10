import styles from './index.module.sass';

import {observer} from "mobx-react";
import {Navbar} from "../Navbar";
import {useState} from "react";
export const Header = observer ((props: any) => {
    const [isOpenHeader, setIsOpenHeader] = useState(false);
    return(
        <header className={ styles.header__wrapper}>
            <div className={ styles.wrapper }>
                <Navbar
                        handleHeader ={ () => setIsOpenHeader(!isOpenHeader) }
                        isActive = { isOpenHeader }/>
            </div>
        </header>
    )
})