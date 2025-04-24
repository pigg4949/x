import * as authRepository from "../data/auth.mjs";

// 새로운 유저 생성
export async function signup(req, res, next) {
  const { userid, password, name, email } = req.body;
  const users = await authRepository.createUser(userid, password, name, email);
  if (users) {
    res.status(201).json(users);
  }
}

// 로그인
export async function login(req, res, next) {
  const { userid, password } = req.body;
  const user = await authRepository.login(userid, password);
  if (user) {
    res.status(200).json(`${userid}님은 로그인에 성공하였습니다.`);
  } else {
    res.status(500).json(`${userid}님 아이디 또는 비밀번호를 확인하세요.`);
  }
}

// 로그인 유지
