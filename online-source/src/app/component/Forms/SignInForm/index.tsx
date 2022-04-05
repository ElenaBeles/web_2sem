import {Form, Formik, Field} from 'formik';
import styles from './index.module.sass';
import {useStores} from "../../../utils/use-stores-hook";
import {UserModel} from "../../../models/UserModel";
import {Button} from "../../ui/Button";
import SignInSchema from "../Schems/SignInSchema";

export const SignInForm = (props:any) => {
    const { usersStore: { login } } = useStores();

    const signIn = (values: any) => {
        const user:UserModel = {
            login: values.phone_number,
            password: values.password,
        }
        login(user)
    }
    
    
    return (
        <div>
            <Formik
                initialValues = {{
                    phone_number: '',
                    password: '',
                }}
                validationSchema={ SignInSchema }
                onSubmit = {(values => {
                    signIn(values)
                })}>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        <Field
                            name = "phone_number"
                            type = "text"
                            placeholder = "Телефон"
                            className = { styles.form__field }
                        />
                        { errors.phone_number &&
                        touched.phone_number && <p className={ styles.error }>
                            { errors.phone_number }
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
                            className = { styles.form__btn }
                            text={"Войти"}
                            isDisabled={ !!(errors.password && errors.password)}
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}