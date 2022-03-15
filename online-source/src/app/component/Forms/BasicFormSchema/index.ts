import * as yup from "yup";

const BasicFormSchema = yup.object().shape({
    phone: yup.string()
        .length(10, 'wrong length')
        .required('Required'),
    email: yup.string()
        .email("Invalid email address")
        .required("Required"),
    code: yup.string()
        .length(4, 'Введите действительный код')
})

export default BasicFormSchema;