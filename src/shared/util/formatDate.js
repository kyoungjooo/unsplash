export default function formatDate(dateStr) {
  if (!dateStr) return;
  const sliced = dateStr?.split("T");
  const date = sliced[0];
  const [year, month, day] = date.split("-");
  const formattedDate = `${year}년 ${month}월 ${day}일`;
  return formattedDate;
}
