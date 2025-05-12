/*
  Mongoose
  - MontoEG + Node.js용 ORM(Object-Relational Mapping)
  - 스키마를 정의
  - 입력, 수정, 조회, 삭제 모두 안정적이고 간결하게 코드 작성 가능
*/

import { config } from "../config.mjs";
import Mongoose from "mongoose";

export async function connectDB() {
  return Mongoose.connect(config.db.host);
}

export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtual: true });
  schema.set("toObject", { virtual: true });
}
