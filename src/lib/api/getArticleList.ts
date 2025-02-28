"use server";

interface GetArticleListResponse {
  articles: Video[];
  page: number;
  hasPrev: boolean;
  hasNextPage: boolean;
  totalPageCount: number;
}

export async function getArticleList(
  pageNumber: number,
): Promise<GetArticleListResponse> {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/api/articles?page=${pageNumber}`,
    );
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("[ERROR]getArticleList:\n", error);
    return {
      articles: [],
      page: -1,
      hasNextPage: false,
      hasPrev: false,
      totalPageCount: -1,
    };
  }
}
