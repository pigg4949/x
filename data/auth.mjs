import MongoDb from "mongodb";
import { getUsers } from "../db/database.mjs";
const ObjectId = MongoDb.ObjectId;

//회원 가입(새로운 객체 추가)
export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((result) => result.insertedId.toString());
}

// 로그인 (아이디 패스워드 일치 = 로그인)
export async function login(userid, password) {
  const user = users.find(
    (user) => user.userid === userid && user.password === password
  );
  return user;
}

// 아이디 찾기(중복방지)
export async function findByUserid(userid) {
  return getUsers().find({ userid }).next().then(mapOptionalUser);
}

export async function findByid(id) {
  return getUsers()
    .find({ _id: new ObjectId(id) })
    .next()
    .then(mapOptionalUser);
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
