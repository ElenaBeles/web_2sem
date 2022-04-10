import styles from './index.module.sass';
import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutCointainer";

export const Profile = observer(() => {
    return (
        <LayoutContainer>
            <div className={styles.wrapper}>
                <h1 className={ styles.title }>Личный кабинет</h1>

                <div className={ styles.user__info }>
                    <section className={ styles.profile__card__wrapper}>
                        <img src="" alt=""/>
                    </section>
                    <section className={ styles.about__users__wrapper }>

                    </section>
                </div>
            </div>
        </LayoutContainer>
    )
})