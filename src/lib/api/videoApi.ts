import newsData from "@/data/news.json";

export async function fetchVideos(): Promise<Video[]> {
  try {
    // const response = await fetch("api/articles");

    // if (!response.ok) {
    //   throw new Error("뉴스를 불러오는데 실패했습니다.");
    // }

    // return response.json();

    return newsData;
  } catch (error) {
    console.error("데이터 가져오기 실패", error);
    return [];
  }
}
