import { ChangeEvent } from 'react';

import { DataVisualizationVariantsT } from '../../types.ts';
import { Box } from '../Box/Box.tsx';

import './input.css';

interface IInputHelperText {
  text: string;
  variant: DataVisualizationVariantsT;
}

export const InputHelperText = ({ text, variant }: IInputHelperText) => {
  const getTipClassName = (variant: IInputHelperText['variant']) => {
    switch (variant) {
      case 'success':
        return 'input-helper-success';
      case 'error':
        return 'input-helper-error';
      case 'warning':
        return 'input-helper-warning';
      default:
        return 'input-helper-info';
    }
  };

  return (
    <Box direction="row" style={{ marginLeft: '1rem' }}>
      <span className={getTipClassName(variant)}>{text}</span>
    </Box>
  );
};

interface IInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  helperText?: string;
  error?: boolean;
  type: 'text' | 'password';
  disabled?: boolean;
}

export const Input = ({ value, onChange, name, type, placeholder, disabled, helperText, error }: IInputProps) => {
  const getHelperTextVariant = (): DataVisualizationVariantsT => {
    if (error) {
      return 'error';
    }
    return 'info';
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Box direction="column" gap={0.5}>
      <input
        type={type}
        value={value}
        onChange={onChangeInput}
        name={name}
        disabled={Boolean(disabled)}
        placeholder={placeholder}
      />

      <Box>{helperText ? <InputHelperText text={helperText} variant={getHelperTextVariant()} /> : null}</Box>
    </Box>
  );
};
