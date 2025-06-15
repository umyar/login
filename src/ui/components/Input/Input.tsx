import { ChangeEvent } from 'react';

import { DataVisualizationVariantsT } from '../../types.ts';
import { Box } from '@/ui';

import styles from './input.module.css';

interface IInputHelperText {
  text: string;
  id: string;
  variant: DataVisualizationVariantsT;
}

export const InputHelperText = ({ text, variant, id }: IInputHelperText) => {
  const getTipClassName = (variant: IInputHelperText['variant']) => {
    switch (variant) {
      case 'success':
        return styles.inputHelperSuccess;
      case 'error':
        return styles.inputHelperError;
      case 'warning':
        return styles.inputHelperWarning;
      default:
        return styles.inputHelperInfo;
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
        aria-required={ariaRequired ? 'true' : 'false'}
        aria-invalid={error ? 'true' : 'false'}
        aria-errormessage={ariaErrorAnchor}
        className={styles.textInput}
      />

      <Box>
        {helperText ? (
          <InputHelperText id={ariaErrorAnchor} text={helperText} variant={getHelperTextVariant()} />
        ) : null}
      </Box>
    </Box>
  );
};
