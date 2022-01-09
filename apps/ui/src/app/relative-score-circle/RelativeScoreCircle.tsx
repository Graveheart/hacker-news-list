import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './RelativeScoreCircle.module.scss';

const MAX_STORY_SCORE = 1000;

/* eslint-disable-next-line */
export interface RelativeScoreCircleProps {
  className?: string;
  value: number;
  max?: number;
}

export function RelativeScoreCircle({
  className,
  value,
  max = MAX_STORY_SCORE,
}: RelativeScoreCircleProps) {
  return (
    <div className={className}>
      <CircularProgressbarWithChildren
        value={value}
        maxValue={max}
        strokeWidth={5}
      >
        <div className={styles.scoreContent}>
          <span>{value}</span>
          <span>points</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default RelativeScoreCircle;
