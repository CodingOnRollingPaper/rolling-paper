const express = require("express");
const router = express.Router();
const controller = require("../Controller/Cmain");

// 메인 페이지 GET
router.get("/", controller.getMain);

// 로그인 페이지 렌더링 GET
router.get("/login", controller.getLogin);

// 로그인 페이지 로그인 POST
router.post("/login", controller.postLogin);

// 로그아웃 POST
router.post("/logout", controller.postLogout);

// 회원가입 페이지 렌더링 GET
router.get("/signup", controller.getSignup);

// 회원가입 페이지 아이디 체크 POST
router.post("/signup/idCheck", controller.postIdCheck);

// 회원가입 페이지 회원가입 POST
router.post("/signup", controller.postSignup);

// 게시글 작성 페이지 GET(임시)
router.get("/paper/:userId/:userName", controller.getPaper);
// 로그인 성공 페이지 GET
router.get("/login/:userId", controller.getLoginUserId);
// 게시글 생성 CREATE
router.post("/post/create", controller.createPost);
// 게시글 하나 조회 - 수정
router.post("/post/editPwCheck", controller.editPwCheck); // 하나조회

module.exports = router;
