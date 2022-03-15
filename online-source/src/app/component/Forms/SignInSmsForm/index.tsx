import {Form, Formik, Field} from 'formik';
import BasicFormSchema from "../BasicFormSchema";
import {Button} from "../../ui/Button";

import styles from '../SignInForm/index.module.sass';
import {useStores} from "../../../utils/use-stores-hook";
import {SignInWithCodeModal} from "../../Modals/SignInWithCodeModal";

export const SignInSmsForm = (props:any) => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openModalSignWithCode = () => {
        clearCurrentModal()
        setCurrentModal(SignInWithCodeModal)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    phone: '',
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {
                    (values: any) => console.log(values)
                }>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        <Field
                            name = "phone"
                            type = "text"
                            placeholder = "Телефон"
                            className = { styles.form__field }
                        />
                        { errors.phone &&
                        touched.phone && <div className={ styles.error }>
                            { errors.phone }
                        </div>}
                        <Button
                            type={"submit"}
                            text={"Получить код"}
                            className = { styles.form__btn }
                            onClick={ openModalSignWithCode }
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}