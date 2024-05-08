const express = require("express");
const dotenv = require("dotenv");
const lessonOneRouter = require("./routes/lessonOne");
const lessonTwoRouter = require("./routes/lessonTwo");
const topPage = require("./pages/top");
const cors = require("cors");
const app = express();
dotenv.config();

app.use(express.static("public"))

const corsOptions = {
  // origin: 'http://localhost:3000', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}

app.use(cors(corsOptions))

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // エラーの処理
  throw new Error(error.message);
})

app.get("/", (request, response) => {
  response.status(200).send(topPage);
})

// ルーティング
app.use("/lessonOne",lessonOneRouter);
app.use("/lessonTwo",lessonTwoRouter);