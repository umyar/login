import { IReactChildrenBase } from '../../types.ts';

import './login-layout.css';

interface ILoginFormLayoutProps extends IReactChildrenBase {
  mobile?: boolean;
}

export const LoginFormLayout = ({ mobile = false, children }: ILoginFormLayoutProps) => {
  return <div className={mobile ? 'login-form-layout-mobile' : 'login-form-layout-desktop'}>{children}</div>;
};
