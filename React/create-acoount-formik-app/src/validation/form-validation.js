import * as Yup from 'yup'

export const createAccountSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Value length cannot be less than 3 characters')
        .max(10, 'Value length cannot exceed 10 characters')
        .matches(/^[^\d\s]+$/, 'Value cannot contain a number or spaces')
        .required('Required'),

    lastName: Yup.string()
        .min(3, 'Value length cannot be less than 3 characters')
        .max(10, 'Value length cannot exceed 10 characters')
        .matches(/^[^\d\s]+$/, 'Value cannot contain a number or spaces')
        .required('Required'),

    email: Yup.string().email('Invalid email address').required('Required'),

    phone: Yup.string()
        .matches(/^(?:\+994|0)(50|51|55|70|77)[0-9]{7}$/, 'Invalid Azerbaijan phone number')
        .required('Required'),

        dateBirth: Yup.date().required("Required"),   

    password: Yup.string()
        .min(6, 'Password length must be greater than 6 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).+$/, 'Invalid password format')
        .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});