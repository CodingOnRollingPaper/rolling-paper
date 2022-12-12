const btnShareFb = document.querySelector("#facebook");

btnShareFb.addEventListener("click", () => {
  const pageUrl = "news.v.daum.net/v/20220319120213003";
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
});

function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("0803d9053526c2cce3cb351605e03f1c");

  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#kakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "마음푸쉬", // 보여질 제목
      description: "당신의 마음을 전달해주세요", // 보여질 설명
      imageUrl: "http://localhost:8000", // 콘텐츠 URL
      link: {
        mobileWebUrl: "http://localhost:8000",
        webUrl: "http://localhost:8000",
      },
    },
  });
}
