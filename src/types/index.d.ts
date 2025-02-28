interface Video {
  id: number;
  title: string;
  source_url: string;
  thumbnail_url: string;
  video_url: string;
  source_created_at: string;
}

declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_URL: string;
  }
}

interface ArticleListResponse {
  status: string;
  message: string;
  data: {
    articles: Video[];
    page: number;
    hasPrev: boolean;
    hasNextPage: boolean;
    totalPageCount: number;
  };
}
