import { ICommonButtonProps } from '../../types.ts';

import './common.css';

interface IButtonProps extends Omit<ICommonButtonProps, 'onClick'> {
  onClick?: () => void;
}

export const Button = ({ children, onClick, disabled, loading, type }: IButtonProps) => {
  // TODO: no need after the correct button types overload
  const dummyHandler = () => {
    alert('this button onClick is not specified!');
  };

  if (type === 'submit') {
    return (
      <button disabled={Boolean(disabled)} type="submit" className="button">
        {loading ? '⌛' : children}
      </button>
    );
  }

  return (
    <button onClick={onClick || dummyHandler} disabled={Boolean(disabled)} type={type || 'button'} className="button">
      {loading ? '⌛' : children}
    </button>
  );
};
