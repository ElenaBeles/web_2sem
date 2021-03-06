import * as yup from "yup";

const BasicFormSchema = yup.object().shape({
    phone_number: yup.string()
        .required("Введите корректный номер"),
    password: yup.string()
        .min(3)
        .required("Введите корректный пароль"),
})

export default BasicFormSchema;