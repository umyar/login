import { ChangeEvent } from 'react';

import '../../ui.css';

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: 'text' | 'password';
  disabled?: boolean;
}

export const Input = ({ value, onChange, type, placeholder, disabled }: IInputProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input type={type} value={value} onChange={onChangeInput} disabled={Boolean(disabled)} placeholder={placeholder} />
  );
};
