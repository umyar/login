import { useState } from 'react';
import './App.css';
import { LoginForm } from './components/login/Login.tsx';

function App() {
  const [count, setCount] = useState(0);

  const onForgotPasswordClick = () => {
    alert(
      'This is a fancy redirect to somewhere... If you want to specify the root, please pay for the subscription first! 🤣🤣🤣'
    );
  };

  const onLoginSuccess = () => {
    alert('Finally correct credentials. Redirecting you somewhere...');
  };

  return <LoginForm onForgotPasswordClick={onForgotPasswordClick} onLoginSuccess={onLoginSuccess} />;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
