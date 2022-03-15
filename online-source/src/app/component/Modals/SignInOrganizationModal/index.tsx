import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {SignInModal} from "../SignInModal";
import styles from "../SignInModal/index.module.sass";
import {Modal} from "../Modal";
import {SignInSmsForm} from "../../Forms/SignInSmsForm";
import {Button} from "../../ui/Button";
import {SignInOrganizationForm} from "../../Forms/SignInOrganizationаForm";

export const SignUpOrganizationModal = observer(() => {
    const { modalStore: { setCurrentModal,clearCurrentModal }} = useStores();

    const openSignInModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInModal)
    }

    const openSignInOrganizationModal = () => {
        clearCurrentModal()
        setCurrentModal(SignUpOrganizationModal)
    }

    return(
        <div className={ styles.overlay }>
            <div className={ styles.wrapper }>
                <Modal title={ "Регистрация" } onClose={ clearCurrentModal }>
                    <div className={ styles.form__wrapper }>
                        <SignInOrganizationForm/>
                        <div className={ styles.form__links }>
                            <button
                                className={ styles.form__link}
                                onClick={ openSignInModal }
                            >
                                Я уже зарегистировался(-ась)
                            </button>
                        </div>
                        <Button text = { "Вход для партнеров" }
                                type = { "submit" }
                                status = { "secondary" }
                                className={ styles.form__btn}
                                onClick={ openSignInOrganizationModal }
                        />
                    </div>
                </Modal>
            </div>
        </div>
    )
})