export interface StoryData {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: Type;
  url: string;
}

enum Type {
  Story = 'story',
}
