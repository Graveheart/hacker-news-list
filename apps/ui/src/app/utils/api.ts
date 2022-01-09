export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const storiesUrl = `${baseUrl}/topstories.json`;
export const storyUrl = (storyId: number) => `${baseUrl}/item/${storyId}.json`;
export const userUrl = (userId: string) => `${baseUrl}/user/${userId}.json`;
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
