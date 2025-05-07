import { db } from "../db/database.mjs";

//회원 가입(새로운 객체 추가)
export async function createUser(user) {
  const { userid, password, name, email, url } = user;
  return db
    .execute(
      "insert into users (userid, password, name, email, url) values (?,?,?,?,?)",
      [userid, password, name, email, url]
    )
    .then((result) => result[0].insertId);
}

// 로그인 (아이디 패스워드 일치 = 로그인)
export async function logincheck(userid, password) {
  // const [rows] = await db.query("select * from user");
  // const userid = rows.find((u) => u.userid === userid);
  // const password = rows.find((p) => p.password === password);
  // if (!userid) {
  //   return res.status(401).json({ message: "일치하는 아이디 없음" });
  // }
  // if (!password) {
  //   return res.status(401).json({ message: "비밀번호를 확인 필요" });
  // }
  // return [userid, password];
}

// 아이디 찾기(중복방지)
export async function findByUserid(userid) {
  return db
    .execute("select * from users where userid=?", [userid])
    .then((result) => result[0][0]);
}

export async function findByid(idx) {
  return db
    .execute("select * from users where idx=?", [idx])
    .then((result) => result[0][0]);
}
