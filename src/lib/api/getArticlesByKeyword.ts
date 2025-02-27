export async function getArticlesByKeyword(
  keyword: string,
): Promise<Video[] | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`/api/search?keyword=${keyword}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("[ERROR]getArticlesByKeyword:\n", error);
    return null;
  }
}
