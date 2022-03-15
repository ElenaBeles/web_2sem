import {useStores} from "../../../utils/use-stores-hook";
import {SignInWithCodeModal} from "../../Modals/SignInWithCodeModal";
import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../BasicFormSchema";
import styles from "../SignInForm/index.module.sass";
import {Button} from "../../ui/Button";

export const SignInOrganizationForm = (props:any) => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openModalSignWithCode = () => {
        clearCurrentModal()
        setCurrentModal(SignInWithCodeModal)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    organization: '',
                    email: '',
                    password: ''
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {
                    (values: any) => console.log(values)
                }>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        <Field
                            name = "organization"
                            type = "text"
                            placeholder = "Наименование организации"
                            className = { styles.form__field }
                        />
                        { errors.organization &&
                        touched.organization && <div className={ styles.error }>
                            { errors.organization }
                        </div>}
                        <Field
                            name = "email"
                            type = "email"
                            placeholder = "Email"
                            className = { styles.form__field }
                        />
                        { errors.email &&
                        touched.email && <div className={ styles.error }>
                            { errors.email }
                        </div>}
                        <Field
                            name = "password"
                            type = "password"
                            placeholder = "Пароль"
                            className = { styles.form__field }
                        />
                        { errors.password &&
                        touched.password && <div className={ styles.error }>
                            { errors.password }
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