import { ChangeEvent, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// TODO: alias for ui directory
import { Box, Button, Feedback } from '../../ui';
import { getErrorMessage } from '../../utils/errors.ts';

import { httpClient } from '../../utils/http-client.ts';
import { ISeverResponse } from '../../types.ts';
import { VALIDATORS } from '../../utils/user_input_validators';

interface ICredentials {
  email: string;
  password: string;
}

interface ILoginFormProps {
  onForgotPasswordClick: () => void;
  onLoginSuccess: () => void;
}

export const LoginForm = ({ onForgotPasswordClick, onLoginSuccess }: ILoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((shown) => !shown);
  };

  const onSubmitCredentials = async (credentials: ICredentials) => {
    try {
      setIsLoading(true);

      const response = await httpClient<ICredentials, ISeverResponse>('/login', { method: 'post', body: credentials });

      if (response.status === 'ok') {
        onLoginSuccess();
      } else {
        setError(response.message);
      }
    } catch (e: unknown) {
      const errorMessage = getErrorMessage(e, 'Something went wrong while login credentials submit');
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }

    console.log('creds:', credentials);
  };

  return (
    <Formik
      key="login-form"
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{ email: '', password: '', autofill: false, focusInput: '' }}
      // initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: VALIDATORS.email,
        password: VALIDATORS.password,
      })}
      onSubmit={onSubmitCredentials}
    >
      {({ isSubmitting, errors, setFieldValue }) => {
        return (
          <Form>
            <Box direction="column">
              {error ? <Feedback type="error" text={error} /> : null}
              <Box direction="column">
                <Field
                  label="Email"
                  placeholder="Fill in here your Email"
                  name="email"
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('email', event.target.value);
                  }}
                />
                <Field
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    // setFieldValue('autofill', false);
                    setFieldValue('password', event.target.value);
                  }}
                />
                <Button onClick={togglePasswordVisibility}>{showPassword ? '🐵' : '🙈'}</Button>
              </Box>
              <Box>
                <Button onClick={onForgotPasswordClick}>I forgot my password</Button>
              </Box>
              <Box>
                <Button type="submit" loading={isSubmitting || isLoading} disabled={isLoading}>
                  Login
                </Button>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
