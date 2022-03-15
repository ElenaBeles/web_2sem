import {Form, Formik, Field} from 'formik';
import BasicFormSchema from "../BasicFormSchema";
import {Button} from "../../ui/Button";

import styles from './index.module.sass';

export const SignInForm = (props:any) => {
    return (
        <div>
            <Formik
                initialValues = {{
                    phone: '',
                    password: '',
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
                        touched.phone && <p className={ styles.error }>
                            { errors.phone }
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