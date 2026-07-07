// 공개 노션 페이지 링크(Share > Share to web)를 여기에 붙여넣으세요.
// 예: const NOTION_URL = "https://yourname.notion.site/My-Portfolio-abc123";
const NOTION_URL = "";

const frame = document.getElementById("notion-frame");
const fallback = document.getElementById("notion-fallback");
const openLink = document.getElementById("notion-open-link");

if (NOTION_URL) {
  frame.src = NOTION_URL;
  frame.style.display = "block";
  fallback.style.display = "none";
  openLink.href = NOTION_URL;
} else {
  frame.style.display = "none";
  fallback.style.display = "flex";
  openLink.style.display = "none";
}
