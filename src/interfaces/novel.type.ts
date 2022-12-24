export interface NovelStatistics {
  novel: Novel;
  reader_prefer: Rate;
  view_avg: Rate;
  reading_rate: Rate;
  upload_rate: Rate;
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
  content_avg: number;
  cur: number;
  percentage: number;
}
