import styles from "../SignInModal/index.module.sass"
import { Modal } from "../Modal";
import { observer } from "mobx-react";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button";
import { SignInSmsForm } from "../../Forms/SignInSmsForm";
import { SignInModal } from "../SignInModal";
import {SignInOrganizationModal} from "../SignInOrganizationModal";

export const SignInSmsModal = observer(() => {
    const { modalStore: { setCurrentModal,clearCurrentModal }} = useStores();

    const openModalSignIn = () => {
        clearCurrentModal()
        setCurrentModal(SignInModal)
    }

    const openSignInOrganizationModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInOrganizationModal)
    }
    return(
        <div className={ styles.overlay }>
            <div className={ styles.wrapper }>
                <Modal title={ "Вход или регистрация" } onClose={ clearCurrentModal }>
                    <div className={ styles.form__wrapper }>
                        <SignInSmsForm/>
                        <div className={ styles.form__links }>
                            <button
                                className={ styles.form__link}
                                onClick={ openModalSignIn }
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