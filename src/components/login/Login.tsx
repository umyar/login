import { ChangeEvent, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// TODO: alias for ui directory
import { Box, Button, Feedback, Input, LoginFormLayout } from '../../ui';
import { getErrorMessage } from '../../utils/errors.ts';

import { httpClient } from '../../utils/http-client.ts';
import { ISeverResponse } from '../../types.ts';
import { VALIDATORS } from '../../utils/user-input-validators';

const INITIAL_VALUES: ICredentials = {
  email: '',
  password: '',
};

interface ICredentials {
  email: string;
  password: string;
}

interface ILoginFormProps {
  onForgotPasswordClick: () => void;
  onSignUpClick: () => void;
  onLoginSuccess: () => void;
}

export const LoginForm = ({ onForgotPasswordClick, onLoginSuccess, onSignUpClick }: ILoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  // const formik = useFormik<ICredentials>({
  //   initialValues: INITIAL_VALUES,
  //   onSubmit: async (values) => {
  //     await onSubmitCredentials(values);
  //   },
  // });

  const togglePasswordVisibility = () => {
    setShowPassword((shown) => !shown);
  };

  const onSubmitCredentials = async (credentials: ICredentials) => {
    try {
      setIsLoading(true);

      const response = await httpClient<ICredentials, ISeverResponse>('/login', { method: 'post', body: credentials });
      console.log('response', response);

      if (response.status === 'ok') {
        onLoginSuccess();
      } else {
        setError(response.message);
      }
    } catch (e: unknown) {
      const errorMessage = getErrorMessage(e, 'Something went wrong while login credentials submit');
      setError(errorMessage);
      console.log('error', errorMessage, e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      key="login-form"
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={INITIAL_VALUES}
      validationSchema={Yup.object({
        email: VALIDATORS.email,
        password: VALIDATORS.password,
      })}
      onSubmit={onSubmitCredentials}
    >
      {({ isSubmitting, errors, setFieldValue }) => {
        return (
          <Form>
            <LoginFormLayout>
              <Box slotName="hey" style={{ justifyContent: 'end' }}>
                <h1 className="visually-hidden">Login form</h1>
                <span>👋 Hey! Nice to see you again!</span>
              </Box>

              <Box slotName="feedback">{error ? <Feedback variant="error" text={error} /> : null}</Box>

              <Box slotName="email">
                <Field
                  label="Email"
                  placeholder="Email"
                  name="email"
                  as={Input}
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('email', event.target.value);
                  }}
                />
              </Box>

              <Box slotName="password">
                <Field
                  label="Password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  as={Input}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('password', event.target.value);
                  }}
                />
              </Box>
              <Box slotName="spy" style={{ height: '3rem' }}>
                <Button onClick={togglePasswordVisibility} variant="secondary">
                  {showPassword ? '🐵' : '🙈'}
                </Button>
              </Box>

              <Box slotName="submit" style={{ height: '3.2rem' }}>
                <Button type="submit" loading={isSubmitting || isLoading} variant="primary">
                  Login
                </Button>
              </Box>

              <Box slotName="forgot">
                <Button onClick={onForgotPasswordClick} variant="secondary">
                  I forgot my password
                </Button>
              </Box>

              <Box slotName="sign-up">
                <Button onClick={onSignUpClick} variant="secondary">
                  Sign up
                </Button>
              </Box>
            </LoginFormLayout>
          </Form>
        );
      }}
    </Formik>
  );
};
