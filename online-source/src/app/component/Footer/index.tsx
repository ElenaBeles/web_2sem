import styles from './index.module.sass';
import {Icon} from "../ui/Icon";

export const Footer = (props: any) => {
    return(
        <footer className={ styles.footer__wrapper }>
            <div className={ styles.footer }>
                <button className={ styles.footer__btn }>
                    <Icon name={ 'email' }/>
                    <a className={ styles.footer__link } href="#">info@ecorus.ru</a>
                </button>
                <button className={ styles.footer__btn }>
                    <Icon name={ 'phone' }/>
                    <a className={ styles.footer__link } href="#">+7 (800) 880-88-88</a>
                </button>
            </div>
        </footer>
    )
}