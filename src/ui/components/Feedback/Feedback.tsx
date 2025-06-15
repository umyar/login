import { DataVisualizationVariantsT } from '../../types.ts';

import styles from './feedback.module.css';

interface IFeedbackProps {
  variant: DataVisualizationVariantsT;
  text: string;
}

export const Feedback = ({ variant, text }: IFeedbackProps) => {
  const getIconAndClassName = (type: IFeedbackProps['variant']) => {
    switch (type) {
      case 'success':
        return { icon: '✅', className: `${styles.feedback} ${styles.success}` };
      case 'error':
        return { icon: '🚨', className: `${styles.feedback} ${styles.error}` };
      case 'warning':
        return { icon: '⚠️', className: `${styles.feedback} ${styles.warning}` };
      default:
        return { icon: 'ℹ️', className: `${styles.feedback} ${styles.info}` };
    }
  };

  const { icon, className } = getIconAndClassName(variant);

  return (
    <div className={className}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
