interface GetArticleResponse extends Video {
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
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("[ERROR]getArticle:\n", error);
    return null;
  }
}
