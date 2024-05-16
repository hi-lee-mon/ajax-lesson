const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  if (request.query.employeeNumber === '001') {
    response.status(200).json({
      statusCode: 200,
      message: '正常なレスポンス',
      results: [
        {
          name: '山田太郎',
          employeeNumber: '003',
          birthMonth: '3',
          skills: ['javaScript', 'java'],
        },
      ],
    });
  } else {
    response.status(403).json({
      statusCode: 403,
      message: '編集権限がありません',
    });
  }
});

module.exports = router;
