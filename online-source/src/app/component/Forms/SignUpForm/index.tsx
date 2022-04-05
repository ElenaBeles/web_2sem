import {useStores} from "../../../utils/use-stores-hook";
import {UserModel} from "../../../models/UserModel";
import {Field, Form, Formik} from "formik";
import styles from "../SignInForm/index.module.sass";
import {Button} from "../../ui/Button";
import SignUpSchema from "../Schems/SignUpSchema";

export const SignUpForm = (props:any) => {
    const { usersStore: { register } } = useStores();

    const signUp = (phone: string, password: string) => {
        const user:UserModel = {
            role: 'USER',
            phone_number: phone,
            password: password,
        }
        register(user)
    }


    return (
        <div>
            <Formik
                initialValues = {{
                    phone_number: '',
                    password: '',
                }}
                validationSchema={ SignUpSchema }
                onSubmit = { (values => signUp(values.phone_number, values.password))}>
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
                            text={"Войти"}
                            className = { styles.form__btn }
                            isDisabled={ !!(errors.password && errors.password) }
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}