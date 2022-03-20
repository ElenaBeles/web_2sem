import styles from './index.module.sass';

import {CustomLink} from "../ui/СustomLink";
import {Icon} from "../ui/Icon";
import logo from "../../assets/img/logo.svg"
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {SignInModal} from "../Modals/SignInModal";
export const Header = observer ((props: any) => {
    const { modalStore: { setCurrentModal } } = useStores();

    const openModal = () => {
        setCurrentModal(SignInModal);
    }

    return(
        <header className={ styles.header__wrapper}>
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
                        to='/ecomarket'
                        className={ styles.link }>
                        ЭкоМаркет
                    </CustomLink>
                    <CustomLink
                        to='/about_service'
                        className={ styles.link }>
                        О сервисе
                    </CustomLink>
                </nav>

                <div className={ styles.actions }>
                    <button className={ styles.header__button }>
                        <Icon name='location'/>
                        <a className={ styles.header__button__link }>Казань</a>
                    </button>
                    <button className={ styles.header__button } onClick={ openModal }>
                        <Icon name='exit'/>
                        <a className={ styles.header__button__link }>Войти</a>
                    </button>
                </div>
            </div>
        </header>
    )
})