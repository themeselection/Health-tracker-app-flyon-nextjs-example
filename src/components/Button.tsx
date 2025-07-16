import classNames from 'classnames';

interface ButtonProps {
  classnames?: string;
  content: React.ReactNode;
}

export default function Button({ classnames, content }: ButtonProps) {
  return <button className={classNames('btn', classnames)}>{content}</button>;
}
