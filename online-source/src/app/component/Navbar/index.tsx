import styles from './index.module.sass';

import {FC, useState} from "react";
import {CustomLink} from "../ui/СustomLink";
import logo from "../../assets/img/logo.svg";
import {Icon} from "../ui/Icon";
import {Button} from "../ui/Button";
import {useStores} from "../../utils/use-stores-hook";
import {SignInModal} from "../Modals/SignInModal";
import {ButtonWithIcon} from "../ui/ButtonWithIcon";
import {Link} from "react-router-dom";


export const Navbar: FC = () => {
    const { modalStore: { setCurrentModal } } = useStores();

    const openModal = () => {
        setCurrentModal(SignInModal);
    }

    const [isActive, setIsActive] = useState(false);
    return(
        <div className={ isActive ? styles.mobile__wrapper : styles.wrapper }>
            <Link to={'/'} className={ isActive ? styles.mobile__logo: styles.logo }>
                <img
                    src = { logo }
                    alt={ logo }/>
            </Link>
            <Button
                status={'usually'}
                type={"button"}
                onClick={ () => setIsActive(!isActive) }
                className={ styles.burger__btn }
            >
                <Icon name={ isActive ? "close" : "menu"}/>
            </Button>
            <div className={ isActive ? styles.mobile__wrapper__navbar : styles.wrapper__nav }>
                <nav
                    className={ styles.navbar }>
                    <ul className={ isActive ? styles.mobile__wrapper__nav : styles.navbar__links }>
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
                    </ul>
                </nav>
                <div className={ isActive ? styles.mobile__actions: styles.actions }>
                    <ButtonWithIcon
                        name = { 'location' }
                        text = { 'Казань' }
                    />
                    <ButtonWithIcon
                        name = { 'exit' }
                        text={ 'Войти '}
                        onClick={ openModal }
                    />
                </div>
            </div>
        </div>

    )
}