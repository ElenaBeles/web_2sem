import * as yup from "yup";

const BasicFormSchema = yup.object().shape({
    phone: yup.string()
        .length(10, 'Некорректная длина')
        .required("Введите корректный номер"),
    email: yup.string()
        .email("Неверный адрес электронной почты")
        .required("Введите корректный email"),
    code: yup.string()
        .length(4, 'Введите действительный код'),
    password: yup.string()
        .min(3)
        .required("Введите корректный пароль"),
})

export default BasicFormSchema;