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
    req.session.user = { userid };
    res.status(200).json(`${userid}님은 로그인에 성공하였습니다.`);
  } else {
    res.status(500).json(`${userid}님 아이디 또는 비밀번호를 확인하세요.`);
  }
}

// 로그인 확인
export async function check(req, res, next) {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
}

// 로그아웃
export async function logout(req, res, nex) {
  if (req.session.user) {
    req.session.destroy(() => {
      res.send(`로그아웃되셨습니다.`);
    });
  } else {
    res.status(401).send("로그인을 먼저 해주세요.");
  }
}
