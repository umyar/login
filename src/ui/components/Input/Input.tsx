import { ChangeEvent } from 'react';

import { DataVisualizationVariantsT, AriaRequiredAttrT } from '../../types.ts';
import { Box } from '../Box/Box.tsx';

import './input.css';

interface IInputHelperText {
  text: string;
  id: string;
  variant: DataVisualizationVariantsT;
}

export const InputHelperText = ({ text, variant, id }: IInputHelperText) => {
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
      <span id={id} className={getTipClassName(variant)}>
        {text}
      </span>
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
  ariaRequired?: boolean;
  type: 'text' | 'password';
  disabled?: boolean;
}

export const Input = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  disabled,
  helperText,
  error,
  ariaRequired,
}: IInputProps) => {
  const getHelperTextVariant = (): DataVisualizationVariantsT => {
    if (error) {
      return 'error';
    }
    return 'info';
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const ariaRequiredValue = (ariaRequired ? String(ariaRequired) : undefined) as AriaRequiredAttrT;
  const ariaInvalid = error ? String(error) : undefined;
  const ariaErrorAnchor = `${name}-aria-err`;

  return (
    <Box direction="column" gap={0.5}>
      <input
        type={type}
        value={value}
        onChange={onChangeInput}
        name={name}
        disabled={Boolean(disabled)}
        placeholder={placeholder}
        aria-required={ariaRequiredValue}
        aria-invalid={ariaInvalid}
        aria-errormessage={ariaErrorAnchor}
      />

      <Box>
        {helperText ? (
          <InputHelperText id={ariaErrorAnchor} text={helperText} variant={getHelperTextVariant()} />
        ) : null}
      </Box>
    </Box>
  );
};
