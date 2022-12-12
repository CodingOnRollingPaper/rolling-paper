const writeImg = document.querySelector(".writeImg");
const writeContent = document.querySelector(".writeContent");
const postArea = document.querySelector(".postArea");
const postContentModal = document.querySelector(".postContentModal");
const postContainer = document.querySelectorAll(".postContainer");
const postContainerDetail = document.querySelectorAll(".postContainerDetail");
const closeDetail = document.querySelectorAll(".closeDetail");

const show = () => {
  writeContent.classList.toggle("noshow");
  postArea.classList.toggle("noshow");
};

// postDetail 모달 띄우기
for (let i = 0; i < postContainer.length; i++) {
  postContainer[i].addEventListener("click", () => {
    postContainerDetail[i].classList.toggle("noshow");
    postArea.classList.toggle("noshow");
  });
}

// x 누르면 postDetail 모달 지우기
for (let i = 0; i < postContainer.length; i++) {
  closeDetail[i].addEventListener("click", () => {
    postContainerDetail[i].classList.toggle("noshow");
    postArea.classList.toggle("noshow");
  });
}
