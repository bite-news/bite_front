/**
 * @param isoDateString - ISO 형식의 날짜 문자열 (예: '2025-02-26T09:30:00Z')
 * @returns 'yyyy년 mm월 dd일' 형식의 문자열
 */

export const dateConverter = (isoDateString: string): string => {
  try {
    const date = new Date(isoDateString);

    if (isNaN(date.getTime())) return "날짜 정보 없음";

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}년 ${month}월 ${day}일`;
  } catch {
    return "날짜 정보 없음";
  }
};
