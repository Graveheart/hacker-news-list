import './Card.scss';

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  children: React.ReactElement;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default Card;
