import styles from './index.module.sass';

import { Modal } from "../Modal";
import { observer } from "mobx-react";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button";
import {SignInForm} from "../../Forms/SignInForm";
import {SignInSmsModal} from "../SignInSmsModal";
import {SignInOrganizationModal} from "../SignInOrganizationModal";
import {SignUpModal} from "../SignUpModal";

export const SignInModal = observer(() => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openSignInSmsModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInSmsModal)
    }

    const openSignInOrganizationModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInOrganizationModal)
    }

    const openSignUpModal = () => {
        clearCurrentModal()
        setCurrentModal(SignUpModal)
    }

    return(
      <div className={ styles.overlay }>
          <div className={ styles.wrapper }>
              <Modal title={ "Вход" } onClose={ clearCurrentModal }>
                  <div className={ styles.form__wrapper}>
                      <SignInForm/>
                      <div className={ styles.form__links}>
                          <button
                              className={ styles.form__link}
                              onClick={ openSignInSmsModal }>
                              Войти с помощью смс
                          </button>
                          <button
                              className={ styles.form__link}
                              onClick={ openSignUpModal }>
                              Регистрация
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