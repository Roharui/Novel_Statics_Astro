export interface NovelStatistics {
  novel: Novel;
  reader_prefer: Rate;
  view_avg: Rate;
  reading_rate: Rate;
  upload_rate: Rate;
  episode: Episode[];
  growth: Growth[];
}

export interface Novel {
  created_at: string;
  updated_at: string;
  title: string;
  type: string;
  thumbnail: string;
  link: string;
  is_end: boolean;
  is_plus: boolean;
  age_limit: number;
  author: string;
  description: string;
}

export interface Rate {
  avg: number;
  pavg: number;
  cur: number;
  percentage: number;
}

export interface Episode {
  idx: number;
  title: string;
  word_size: string;
  view: number;
  good: number;
  comment: number;
  date: string;
}

export interface Growth {
  created_at: string;
  view: number;
  good: number;
  book: number;
}
