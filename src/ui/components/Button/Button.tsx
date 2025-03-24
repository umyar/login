import { ICommonButtonProps } from '../../types.ts';

import './base.css';
import './primary.css';
import './secondary.css';
import './outline.css';

interface IButtonProps extends Omit<ICommonButtonProps, 'onClick'> {
  onClick?: () => void;
}

export const Button = ({ children, onClick, disabled, loading, type, variant }: IButtonProps) => {
  const getBtnClassName = (variant: ICommonButtonProps['variant']) => {
    switch (variant) {
      case 'secondary':
        return 'secondary';
      case 'outline':
        return 'outline';
      default:
        return 'primary';
    }
  };

  // TODO: no need after the correct button types overload
  const dummyHandler = () => {
    alert('this button onClick is not specified!');
  };

  if (type === 'submit') {
    return (
      <button disabled={Boolean(disabled || loading)} type="submit" className={getBtnClassName(variant)}>
        {loading ? '⌛' : children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick || dummyHandler}
      disabled={Boolean(disabled || loading)}
      className={getBtnClassName(variant)}
      type={type || 'button'}
    >
      {loading ? '⌛' : children}
    </button>
  );
};
