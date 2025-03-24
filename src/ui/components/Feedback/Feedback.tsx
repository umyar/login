import { DataVisualizationVariantsT } from '../../types.ts';

import './feedback.css';

interface IFeedbackProps {
  variant: DataVisualizationVariantsT;
  text: string;
}

export const Feedback = ({ variant, text }: IFeedbackProps) => {
  const getIcon = (type: IFeedbackProps['variant']) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '🚨';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  };

  return (
    <div className="feedback">
      <div>{getIcon(variant)}</div>
      <div>{text}</div>
    </div>
  );
};
