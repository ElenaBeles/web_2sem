import * as yup from "yup";

const SignInSchema = yup.object().shape({
    phone_number: yup.string()
        .length(11,"Длина номера телефона = 11 символов")
        .required("Введите корректный номер"),
    password: yup.string()
        .min(3)
        .required("Введите корректный пароль"),
})

export default SignInSchema;