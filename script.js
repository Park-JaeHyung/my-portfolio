// 공개 노션 페이지 링크(Share > Share to web)를 여기에 붙여넣으세요.
// 예: const NOTION_URL = "https://yourname.notion.site/My-Portfolio-abc123";
const NOTION_URL = "https://pleasant-bobolink-004.notion.site/XR-d08b7b672c748346b3dc811bab461d4a?source=copy_link";

const card = document.getElementById("notion-card");
const title = document.getElementById("notion-card-title");
const sub = document.getElementById("notion-card-sub");

if (NOTION_URL) {
  card.href = NOTION_URL;
  title.textContent = "Notion 포트폴리오 보러가기";
  sub.textContent = "클릭하면 새 탭에서 노션 페이지가 열려요.";
}
