export async function getArticleList(
  pageNumber: number,
): Promise<Video[] | null> {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/api/articles?page=${pageNumber}`,
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("[ERROR]getArticle:\n", error);
    return null;
  }
}
