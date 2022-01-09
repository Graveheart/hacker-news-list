import * as React from 'react';
import useSWR from 'swr';
import { userUrl } from '../utils/api';
import Skeleton from 'react-loading-skeleton';

export interface StoryAuthorProps {
  name?: string;
}

function StoryKarma({ name }: StoryAuthorProps) {
  const { data, isValidating } = useSWR(name ? userUrl(name) : null);
  if (!data) {
    return null;
  }
  return <span className="story__label">{`${data.karma} karma`}</span>;
}

export default function StoryAuthor({ name }: StoryAuthorProps) {
  return (
    <p className="story__container">
      <span className="story__text">
        by &nbsp;
        <strong>
          {name ? (
            name
          ) : (
            <Skeleton width="11rem" containerClassName="skeleton-container" />
          )}
        </strong>
      </span>
      <StoryKarma name={name} />
    </p>
  );
}
