const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
const fs = require('fs');

router.get("/" ,(request, response) => {
  const data = {
    statusCode: 200,
    message: "正常なレスポンス",
    result: {
      items:[
        {
          sender:"太郎",
          date:dayjs().format('YYYY-MM-DD'),
          time:dayjs().format('HH:mm:ss'),
          text:"お願いしてもいい？",
          image:"image",
        },
        {
          sender:"花子",
          date:dayjs().format('YYYY-MM-DD').add,
          time:dayjs().add(10,"minute").format('HH:mm:ss'),
          text:"どうしたー？",
        },
        {
          sender:"太郎",
          date:dayjs().format('YYYY-MM-DD'),
          time:dayjs().add(10,"second").format('HH:mm:ss'),
          text:"科学の宿題やるの忘れちゃって、今度おごるから答え送って🙇‍♂️",
          image:"image",
        },
        {
          sender:"花子",
          date:dayjs().add(2,"day").format('YYYY-MM-DD').add,
          time:dayjs().format('HH:mm:ss'),
          text:"スタバ2回",
        },
        {
          sender:"太郎",
          date:dayjs().format('YYYY-MM-DD'),
          time:dayjs().add(5,"second").format('HH:mm:ss'),
          text:"致し方なし",
          image:"image",
        },
      ]
    }
  };
  response.status(200).json(data);
})

router.get("/image" ,(req,res) => {
  // 画像のパス
  const imagePath = "./public/img.jpg";

  // ファイルの読み込み
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      // エラー時の処理
      console.error('画像の読み込み中にエラーが発生しました:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // レスポンスの設定
    res.contentType('image/jpeg'); // 画像のContent-Typeを設定
    res.send(data); // 画像データをレスポンスとして送信
  });
})

module.exports = router;