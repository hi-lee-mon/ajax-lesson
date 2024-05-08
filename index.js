const express = require("express");
const dotenv = require("dotenv");
const lessonOneRouter = require("./routes/lessonOne");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

/**
 * ベースパスの指定
 */
app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // エラーの処理
  throw new Error(error.message);
})


app.get("/", (request, response) => {
  response.status(200).send("hello");
})

// ルーティング
app.use("/lessonOne",lessonOneRouter);