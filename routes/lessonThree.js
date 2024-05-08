const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const fs = require('fs');

router.get('/', (request, response) => {
  const data = {
    statusCode: 200,
    message: '正常なレスポンス',
    result: {
      items: [
        {
          sender: 'me',
          date: dayjs('2024/05/09 16:15:52.001').format('YYYY/MM/DD'),
          time: dayjs('2024/05/09 16:15:52.001').format('HH:mm:ss.SSS'),
          text: 'お願いしてもいい？',
        },
        {
          sender: 'theOtherSide',
          date: dayjs('2024/05/09 16:16:01.101').format('YYYY/MM/DD'),
          time: dayjs('2024/05/09 16:16:01.101').format('HH:mm:ss.SSS'),
          text: 'どうしたー？',
          image: 'image',
        },
        {
          sender: 'me',
          date: dayjs('2024/05/09 16:16:51.301').format('YYYY/MM/DD'),
          time: dayjs('2024/05/09 16:16:51.301').format('HH:mm:ss.SSS'),
          text: '科学の宿題やるの忘れちゃって、今度おごるから答え送って🙇‍♂️',
        },
        {
          sender: 'theOtherSide',
          date: dayjs('2024/05/10 18:01:21.201').format('YYYY/MM/DD'),
          time: dayjs('2024/05/10 18:01:21.201').format('HH:mm:ss.SSS'),
          text: 'スタバ2回',
          image: 'image',
        },
        {
          sender: 'me',
          date: dayjs('2024/05/10 18:01:51.201').format('YYYY/MM/DD'),
          time: dayjs('2024/05/10 18:01:51.201').format('HH:mm:ss.SSS'),
          text: '致し方なし',
          image: 'image',
        },
      ],
    },
  };
  response.status(200).json(data);
});

router.get('/image', (req, res) => {
  // 画像のパス
  const imagePath = './public/img.jpg';

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
});

module.exports = router;
