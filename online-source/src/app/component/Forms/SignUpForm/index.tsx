import {useStores} from "../../../utils/use-stores-hook";
import {UserModel} from "../../../models/UserModel";
import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../BasicFormSchema";
import styles from "../SignInForm/index.module.sass";
import {Button} from "../../ui/Button";

const formItems = [
    { name: "username", type: "text", placeholder: "Придумайте логин"},
    { name: "phone_number", type: "text", placeholder: "Телефон"},
    { name: "email", type: "email", placeholder: "Почта"},
    { name: "password", type: "password", placeholder: "Пароль"},
]

interface FormItems {
    name: string,
    type: 'text'|'email'|'password',
    placeholder: string
}

export const SignUpForm = (props:any) => {
    const { usersStore: { register } } = useStores();

    const signUp = (values: any) => {
        const user:UserModel = {
            role: 'USER',
            username: values.username,
            phone_number: values.phone,
            password: values.password,
            email: values.email
        }
        register(user)
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
                    signUp(values)
                })}>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        { formItems.map((field, index) => (
                            <Field
                                name = { field.name }
                                type = { field.type }
                                placeholder = { field.placeholder }
                                className = { styles.form__field }
                            />
                        ))
                        }
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