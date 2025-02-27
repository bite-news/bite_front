interface Video {
  id: number;
  title: string;
  source_url: string;
  thumbnail_url: string;
  source_created_at: string;
}

declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_URL: string;
  }
}
