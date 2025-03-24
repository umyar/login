import { LoginForm } from './components/login/Login.tsx';

function App() {
  const onForgotPasswordClick = () => {
    alert('This is a redirect to somewhere to restore the password');
  };

  const onLoginSuccess = () => {
    alert('Finally correct credentials! 🎉 Redirecting you somewhere...');
  };

  const onSignUpClick = () => {
    alert('This is a redirect to sign up flow');
  };

  return (
    <LoginForm
      onForgotPasswordClick={onForgotPasswordClick}
      onLoginSuccess={onLoginSuccess}
      onSignUpClick={onSignUpClick}
    />
  );
}

export default App;
