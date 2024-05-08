const express = require("express");
const dotenv = require("dotenv");
const lessonOneRouter = require("./routes/lessonOne");
const topPage = require("./pages/top");
const app = express();
dotenv.config();

app.use(express.static("public"))

const corsOptions = {
  // origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
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