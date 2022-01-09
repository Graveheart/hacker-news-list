import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Story.scss';
import StoryAuthor from './StoryAuthor';

const StoryLoader: React.FC = () => {
  return (
    <div className="story">
      <div className="story__container">
        <div className="story__image-container">
          <Skeleton
            height="3.5rem"
            width="3.5rem"
            className="story__image"
            containerClassName="skeleton-container"
          />
        </div>
        <div className="story__content">
          <div>
            <p className="story__main-title">
              <Skeleton width="85%" />
            </p>
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
              <Skeleton width="33%" containerClassName="skeleton-container" />
            </p>
          </div>
          <div>
            <StoryAuthor />
            <div className="story__secondary-title">
              <Skeleton width="50%" containerClassName="skeleton-container" />
            </div>
          </div>
          <Skeleton
            circle
            height="3rem"
            width="3rem"
            containerClassName="skeleton-container"
          />
        </div>
      </div>
      <div>
        <Skeleton
          width="1.25rem"
          height="1.25rem"
          containerClassName="skeleton-container"
        />
      </div>
    </div>
  );
};

export default StoryLoader;
