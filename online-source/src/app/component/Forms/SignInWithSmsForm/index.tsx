import {useStores} from "../../../utils/use-stores-hook";
import {SignInWithCodeModal} from "../../Modals/SignInWithCodeModal";
import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../BasicFormSchema";
import styles from "../SignInForm/index.module.sass";
import {Button} from "../../ui/Button";

export const SignInWithSmsForm = (props:any) => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openModalSignWithCode = () => {
        clearCurrentModal()
        setCurrentModal(SignInWithCodeModal)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    code: '',
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {
                    (values: any) => console.log(values)
                }>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        <Field
                            name = "code"
                            type = "text"
                            placeholder = "Код"
                            className = { styles.form__field }
                        />
                        { errors.code &&
                        touched.code && <p className={ styles.error }>
                            { errors.code }
                        </p>}
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