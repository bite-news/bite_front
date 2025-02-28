"use server";

export async function getArticlesByKeyword(keyword: string): Promise<Video[]> {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/api/search?keyword=${keyword}`,
    );
    const result = await response.json();

    return result.data.articles;
  } catch (error) {
    console.error("[ERROR]getArticlesByKeyword:\n", error);
    return [];
  }
}
