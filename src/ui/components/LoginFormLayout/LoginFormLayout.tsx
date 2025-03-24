import { IReactChildrenBase } from '../../types.ts';

interface ILoginFormLayoutProps extends IReactChildrenBase {
  mobile?: boolean;
}

export const LoginFormLayout = ({ mobile = false, children }: ILoginFormLayoutProps) => {
  return <div className={mobile ? 'login-form-layout-desktop' : 'login-form-layout-mobile'}>{children}</div>;
};
