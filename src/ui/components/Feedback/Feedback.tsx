import './feedback.css';

interface IFeedbackProps {
  type: 'success' | 'error' | 'warning' | 'info';
  text: string;
}

export const Feedback = ({ type, text }: IFeedbackProps) => {
  const getIcon = (type: IFeedbackProps['type']) => {
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
      <div>{getIcon(type)}</div>
      <div>{text}</div>
    </div>
  );
};
