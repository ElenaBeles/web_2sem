import {Form, Formik, Field} from 'formik';
import BasicFormSchema from "../BasicFormSchema";
import {Button} from "../../ui/Button";

import styles from '../SignInForm/index.module.sass';
import {useStores} from "../../../utils/use-stores-hook";
import {SignInWithCodeModal} from "../../Modals/SignInWithCodeModal";
import {UserModel} from "../../../models/UserModel";

export const SignInSmsForm = (props:any) => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();
    const { usersStore: { register } } = useStores();

    const openModalSignWithCode = () => {
        clearCurrentModal()
        setCurrentModal(SignInWithCodeModal)
    }

    const signUp = (values: any) => {
        const user:UserModel = {
            username: values.username,
            password: values.password,
        }
        console.log(user)
        register(user)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    phone: '',
                    password: '',
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {(values => {
                    signUp(values)
                })}>
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
                        <Field
                            name = "password"
                            type = "password"
                            placeholder = "Пароль"
                            className = { styles.form__field }
                        />
                        { errors.password &&
                        touched.password && <p className={ styles.error }>
                            { errors.password }
                        </p>}
                        <Button
                            type={"submit"}
                            text={"Получить код"}
                            className = { styles.form__btn }
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}