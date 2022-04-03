import {Form, Formik, Field} from 'formik';
import BasicFormSchema from "../BasicFormSchema";
import {Button} from "../../ui/Button";

import styles from './index.module.sass';
import {useStores} from "../../../utils/use-stores-hook";
import {UserModel} from "../../../models/UserModel";

export const SignInForm = (props:any) => {
    const { usersStore: { login } } = useStores();

    const signIn = (values: any) => {
        const user:UserModel = {
            username: values.username,
            password: values.password,
        }
        login(user)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    phone: '',
                    password: '',
                    username: '',
                    email: ''
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {(values => {
                    signIn(values)
                })}>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        <Field
                            name = "username"
                            type = "text"
                            placeholder = "Логин"
                            className = { styles.form__field }
                        />
                        { errors.username &&
                        touched.username && <p className={ styles.error }>
                            { errors.username }
                        </p>}
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
                            text={"Войти"}
                            className = { styles.form__btn }
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}