import newsData from "@/data/news.json";

export async function fetchVideos() {
  try {
    // const response = await fetch("api/videos");

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
