import newsData from "@/data/news.json";

interface GetArticleResponse {
  status: string;
  message: string;
  data: VideoShort;
}

interface VideoShort extends Video {
  prev_id: number | null;
  next_id: number | null;
}

export async function getArticle(
  articleId: number,
): Promise<GetArticleResponse | null> {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/api/articles/${articleId}`,
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("[ERROR]getArticle:\n", error);
    return null;
  }
}
