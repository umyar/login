import { ICommonButtonProps } from '../../types.ts';

import '../../ui.css';

export const LinkButton = ({ children, onClick }: ICommonButtonProps) => {
  return (
    <button className="link-button" onClick={onClick}>
      {children}
    </button>
  );
};
