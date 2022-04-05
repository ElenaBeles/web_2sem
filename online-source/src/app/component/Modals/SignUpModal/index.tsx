import { useStores } from "../../../utils/use-stores-hook";
import styles from '../SignInModal/index.module.sass';
import { Button } from "../../ui/Button";
import { Modal } from "../Modal";
import { SignInWithSmsForm } from "../../Forms/SignInWithSmsForm";
import {SignInSmsForm} from "../../Forms/SignInSmsForm";
import {SignUpForm} from "../../Forms/SignUpForm";
import {SignInModal} from "../SignInModal";
import {SignInOrganizationModal} from "../SignInOrganizationModal";

export const SignUpModal = (props:any) => {
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
                <Modal title={ "Регистрация" } onClose={ clearCurrentModal }>
                    <div className={ styles.form__wrapper }>
                        <SignUpForm/>
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
}