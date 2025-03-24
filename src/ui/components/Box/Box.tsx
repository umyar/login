import { IBoxProps } from '../../types.ts';

import './box.css';

export const Box = ({ children, direction }: IBoxProps) => {
  const getClassName = () => {
    if (direction === 'column') {
      return 'box-vertical';
    }

    return 'box-horizontal';
  };

  return <div className={getClassName()}>{children}</div>;
};
