import styles from './index.module.sass';

import {CustomLink} from "../ui/СustomLink";
import {Icon} from "../ui/Icon";
import logo from "../../assets/img/logo.svg"
export const Header = (props: any) => {
    return(
        <div className={ styles.header__wrapper}>
            <div className={ styles.header }>
                <nav>
                    <img className={ styles.logo } src = { logo } alt={ logo }/>
                    <CustomLink
                        to='/'
                        className={ styles.link }>
                        Главная
                    </CustomLink>
                    <CustomLink
                        to='/collection_points'
                        className={ styles.link }>
                        Пункты сбора
                    </CustomLink>
                    <CustomLink
                        to='/collection_points'
                        className={ styles.link }>
                        ЭкоМаркет
                    </CustomLink>
                    <CustomLink
                        to='/collection_points'
                        className={ styles.link }>
                        О сервисе
                    </CustomLink>
                </nav>

                <div className={ styles.actions }>
                    <button className={ styles.header__button }>
                        <Icon name='location'/>
                        <a className={ styles.header__button__link }>Казань</a>
                    </button>
                    <button className={ styles.header__button }>
                        <Icon name='exit'/>
                        <a className={ styles.header__button__link }>Войти</a>
                    </button>
                </div>
            </div>
        </div>
    )
}