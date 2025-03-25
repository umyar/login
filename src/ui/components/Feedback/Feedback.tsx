import { DataVisualizationVariantsT } from '../../types.ts';

import './feedback.css';

interface IFeedbackProps {
  variant: DataVisualizationVariantsT;
  text: string;
}

export const Feedback = ({ variant, text }: IFeedbackProps) => {
  const getIconAndClassName = (type: IFeedbackProps['variant']) => {
    switch (type) {
      case 'success':
        return { icon: '✅', className: 'feedback success' };
      case 'error':
        return { icon: '🚨', className: 'feedback error' };
      case 'warning':
        return { icon: '⚠️', className: 'feedback warning' };
      default:
        return { icon: 'ℹ️', className: 'feedback info' };
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
