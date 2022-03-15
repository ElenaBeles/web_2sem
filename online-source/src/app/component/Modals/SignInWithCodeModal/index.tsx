import { useStores } from "../../../utils/use-stores-hook";
import styles from '../SignInModal/index.module.sass';
import { Button } from "../../ui/Button";
import { Modal } from "../Modal";
import { SignInWithSmsForm } from "../../Forms/SignInWithSmsForm";

export const SignInWithCodeModal = (props:any) => {
    const { modalStore: { clearCurrentModal }} = useStores();

    return(
        <div className={ styles.overlay }>
            <div className={ styles.wrapper }>
                <Modal title={ "Вход с помощью кода" } onClose={ clearCurrentModal }>
                    <div className={ styles.form__wrapper}>
                        <SignInWithSmsForm/>
                        <div className={ styles.form__links}>
                        </div>
                        <Button text = { "Отправить" }
                                type = { "submit" }
                                status = { "secondary" }
                                className={ styles.form__btn}
                        />
                    </div>
                </Modal>
            </div>
        </div>
    )
}