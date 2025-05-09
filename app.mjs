import express from "express";
import postsRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";
import { connectDB } from "./db/database.mjs";
import { config } from "./config.mjs";

const app = express();

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

connectDB()
  .then(() => {
    app.listen(8080);
  })
  .catch(console.error);
// app.listen(config.host.port);
