import { string } from 'yup';

export const VALIDATORS = {
  email: string()
    .trim()
    .email('Wrong email')
    .required('I mean... Put here something, huh? 🥲')
    .test('email validation', 'I do not believe that it is email... 🙃', (formValue) =>
      formValue ? formValue.match(/^[\x20-\x7F]+$/) : true
    )
    .max(120, 'Damn, why it is so looooooong? 😀'),
  password: string().min(6, 'We need more symbols...').required('I mean... Put here something, huh? 🥲'),
};
