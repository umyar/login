import { IReactChildrenBase } from '../../types.ts';

import './box.css';

export interface IBoxProps extends IReactChildrenBase {
  direction?: 'row' | 'column';
  gap?: number;
}

export const Box = ({ children, direction, gap = 1 }: IBoxProps) => {
  const getClassName = () => {
    if (direction === 'column') {
      return 'box-vertical';
    }

    return 'box-horizontal';
  };

  return (
    <div className={getClassName()} style={{ '--gap': `${gap}rem` }}>
      {children}
    </div>
  );
};
