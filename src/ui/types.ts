import { ReactNode } from 'react';

// TODO: this type or interface after that?
// type PropsWithChildren<P> = P & { children?: ReactNode };

export interface IReactChildrenBase {
  children?: ReactNode;
}

// TODO: overloaded button props (submit -> w/o onClick)
export interface ICommonButtonProps extends IReactChildrenBase {
  type?: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'outline' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
  loading?: boolean;
}

export type DataVisualizationVariantsT = 'success' | 'error' | 'warning' | 'info';
