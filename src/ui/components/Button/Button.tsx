import { ICommonButtonProps } from '../../types.ts';

import './button-base.css';

import primaryStyles from './primary.module.css';
import secondaryStyles from './secondary.module.css';
import outlineStyles from './outline.module.css';

interface IButtonProps extends Omit<ICommonButtonProps, 'onClick'> {
  onClick?: () => void;
}

export const Button = ({ children, onClick, disabled, loading, type, variant }: IButtonProps) => {
  const getBtnClassName = (variant: ICommonButtonProps['variant']) => {
    switch (variant) {
      case 'secondary':
        return `btn ${secondaryStyles.secondary}`;
      case 'outline':
        return `btn ${outlineStyles.outline}`;
      default:
        return `btn ${primaryStyles.primary}`;
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
