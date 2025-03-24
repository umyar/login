import { ReactNode } from 'react';

// TODO: this type or interface after that?
// type PropsWithChildren<P> = P & { children?: ReactNode };

interface IReactChildrenBase {
  children?: ReactNode;
}

export interface IBoxProps extends IReactChildrenBase {
  direction?: 'row' | 'column';
}

// TODO: overloaded button props (submit -> w/o onClick)
export interface ICommonButtonProps extends IReactChildrenBase {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick: () => void;
  loading?: boolean;
}
