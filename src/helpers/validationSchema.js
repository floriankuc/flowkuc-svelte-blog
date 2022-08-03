import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Email is invalid').required('Email is required.'),
  message: yup
    .string()
    .required('Message is required')
    .min(5, 'Message should probably longer. :-)')
})