import { CSSProperties } from 'react';
import { IReactChildrenBase } from '../../types.ts';

import './box.css';

export interface IBoxProps extends IReactChildrenBase {
  direction?: 'row' | 'column';
  gap?: number;
  // TODO: come up w/ smth better here? 🤔
  slotName?: string;
  // TODO: move style prop to root (like IReactChildrenBase)
  style?: CSSProperties;
}

export const Box = ({ children, direction, gap = 0, slotName, style = {} }: IBoxProps) => {
  const getClassName = () => {
    let className = '';

    if (direction === 'column') {
      className = 'box-vertical';
    } else {
      className = 'box-horizontal';
    }

    return className;
  };

  return (
    <div
      className={getClassName()}
      style={{ '--gap': `${gap}rem`, '--slot-name': slotName, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
};
