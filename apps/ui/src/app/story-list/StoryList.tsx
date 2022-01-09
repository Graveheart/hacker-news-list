import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import Card from '../card/Card';
import Story from '../story/Story';
import StoryLoader from '../story/StoryLoader';
import { baseUrl, fetcher, storiesUrl } from '../utils/api';
import { getRandomNumber } from '../utils/functions';
import { StoryData } from './story-list.types';
import styles from './StoryList.module.scss';

const NUMBER_OF_STORIES = 10;

async function loadStory({ storyId }: { storyId: number }) {
  const res = await fetcher(`${baseUrl}/item/${storyId}.json`);
  return res;
}

function compareStories(storyA: StoryData, storyB: StoryData) {
  if (storyA.score > storyB.score) {
    return -1;
  }
  if (storyA.score < storyB.score) {
    return 1;
  }
  return 0;
}

export function StoryList() {
  const { data, error, isValidating } = useSWR<number[]>(storiesUrl, fetcher);
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState<StoryData[]>([]);
  const orderedStories = useMemo(() => stories.sort(compareStories), [stories]);
  useEffect(() => {
    async function setRandomStories() {
      if (data && data.length) {
        const newStories = [];
        setIsLoading(true);
        for (let i = 0; i < NUMBER_OF_STORIES; i++) {
          const randomIndex = getRandomNumber(0, data.length - 1);
          const story = await loadStory({ storyId: data[randomIndex] });
          newStories[i] = story;
        }
        setStories(newStories);
        setIsLoading(false);
      }
    }
    setRandomStories();
  }, [data]);

  return (
    <Card title="Top stories">
      <ul className={styles.storiesList}>
        {isValidating || isLoading
          ? [...Array(NUMBER_OF_STORIES)].map((e, i) => <StoryLoader key={i} />)
          : orderedStories.map((story) => <Story {...story} key={story.id} />)}
      </ul>
    </Card>
  );
}

export default StoryList;
