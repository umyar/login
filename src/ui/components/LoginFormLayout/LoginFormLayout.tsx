import { IReactChildrenBase } from '../../types.ts';

import styles from './login-layout.module.css';

export const LoginFormLayout = ({ children }: IReactChildrenBase) => {
  return <div className={styles.loginFormLayoutDesktop}>{children}</div>;
};
