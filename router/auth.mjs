import express from "express";
import * as authController from "../controller/auth.mjs";

const router = express.Router();

// 회원가입
// POST 방식
// http://127.0.0.1:8080/auth/signup
// json 형태로 입력 후 저장
router.post("/signup", authController.signup);

// 로그인
// POST 방식
// http://127.0.0.1:8080/auth/login
// 아이디와 패스워드 입력시 해당 회원정보 출력
router.post("/login", authController.login);

// 로그인 유지

export default router;
