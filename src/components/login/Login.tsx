import { ReactNode, useState } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

// TODO: alias for ui directory
import { Box, Button, Feedback, Input, LoginFormLayout } from '../../ui';
import { getErrorMessage } from '../../utils/errors.ts';

import { httpClient } from '../../utils/http-client.ts';
import { ISeverResponse } from '../../types.ts';
import { VALIDATORS } from '../../utils/user-input-validators';

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
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((shown) => !shown);
  };

  const onSubmitCredentials = async (credentials: ICredentials) => {
    try {
      setIsLoading(true);
      setError(null);

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
  };

  return (
    <Formik
      key="login-form"
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: VALIDATORS.email,
        password: VALIDATORS.password,
      })}
      onSubmit={onSubmitCredentials}
    >
      {({ values, errors, handleChange, isSubmitting }: FormikProps<ICredentials>) =>
        (
          <Form>
            <LoginFormLayout>
              <Box slotName="hey" style={{ justifyContent: 'end' }}>
                <h1 className="visually-hidden">Login form</h1>
                <span>👋 Hey! Nice to see you again!</span>
              </Box>

              <Box slotName="feedback" style={{ justifyContent: 'center' }}>
                {error ? <Feedback variant="error" text={error} /> : null}
              </Box>

              <Box slotName="email">
                <Field
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Email"
                  as={Input}
                  ariaRequired={true}
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Box>

              <Box slotName="password">
                <Field
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  placeholder="Password"
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  as={Input}
                  ariaRequired={true}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
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
        ) as ReactNode
      }
    </Formik>
  );
};
