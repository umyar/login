import { ChangeEvent } from 'react';

import './input.css';
import { Box } from '../Box/Box.tsx';

interface IInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  helperText?: string;
  error?: boolean;
  type: 'text' | 'password';
  disabled?: boolean;
}

export const Input = ({ value, onChange, type, placeholder, disabled, helperText, error }: IInputProps) => {
  console.log('input', { value, onChange, type, placeholder, disabled, helperText, error });

  const getTipClassName = (error: IInputProps['error']) => {
    if (error) {
      return 'input-helper-error';
    }

    return 'input-helper-info';
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Box direction="column">
      <input
        type={type}
        value={value}
        onChange={onChangeInput}
        disabled={Boolean(disabled)}
        placeholder={placeholder}
      />

      {helperText ? <span className={getTipClassName(error)}>{helperText}</span> : null}
    </Box>
  );
};
