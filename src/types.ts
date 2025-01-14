export interface MemoryItem {
  date: string;
  image: string;
  caption: string;
}

export interface Promise {
  text: string;
  icon: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}