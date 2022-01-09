import { formatRelative } from 'date-fns';
import RelativeScoreCircle from '../relative-score-circle/RelativeScoreCircle';
import { StoryData } from '../story-list/story-list.types';
import './Story.scss';
import StoryAuthor from './StoryAuthor';
import defaultImgSrc from '../../assets/images/default.jpg';
/* eslint-disable-next-line */
export interface StoryProps extends StoryData {}

export function Story({ title, url, score, by, time }: StoryProps) {
  const dateCreated = new Date(time * 1000);
  const relativeTime = formatRelative(dateCreated, new Date());
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="story">
          <div className="story__container">
            <div className="story__image-container">
              <img className="story__image" src={defaultImgSrc} alt={title} />
            </div>
            <div className="story__content">
              <div>
                <p className="story__main-title">{title}</p>
                <p className="story__secondary-title">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="icon icon--left"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"></path>
                    </g>
                  </svg>
                  <span>{relativeTime}</span>
                </p>
              </div>
              <div>
                <StoryAuthor name={by} />
                <div className="story__secondary-title">
                  <span>{url}</span>
                </div>
              </div>
              <RelativeScoreCircle value={score} className="story__score" />
            </div>
          </div>
          <div>
            <svg
              className="story__link"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Story;
