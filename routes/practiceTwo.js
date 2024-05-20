const express = require('express');
const dayjs = require('dayjs');
const router = express.Router();

const validation = (query) => {
  if (!query.password && !query.employeeNumber) return '1';
  if (!query.employeeNumber) return '2';
  if (!query.password) return '3';
};

router.get('/', (request, response) => {
  response.set('Cache-Control', 'public, max-age=36000');
  const SLEEP_TIME = 3000;
  setTimeout(() => {
    const validationResult = validation(request.query);
    console.log(validationResult);
    if (validationResult) {
      response.status(400).json({
        statusCode: 400,
        message: 'Bad Request',
        result: {
          id: '',
          employeeNumber: request.query.employeeNumber,
        },
        ngCode: validationResult,
      });
    } else {
      const now = dayjs().format('YYYY/MM/DD HH:mm:ss');
      response.status(200).json({
        statusCode: 200,
        message: '正常なレスポンス',
        result: {
          id: crypto.randomUUID(), // 勤怠開始ID
          employeeNumber: request.query.employeeNumber,
          startTime: now,
        },
      });
    }
  }, SLEEP_TIME);
});

router.get('/:time', (request, response) => {
  response.set('Cache-Control', 'public, max-age=36000');
  const SLEEP_TIME = request.params.time;
  setTimeout(() => {
    const validationResult = validation(request.query);
    console.log(validationResult);
    if (validationResult) {
      response.status(400).json({
        statusCode: 400,
        message: 'Bad Request',
        result: {
          id: '',
          employeeNumber: request.query.employeeNumber,
        },
        ngCode: validationResult,
      });
    } else {
      const now = dayjs().format('YYYY/MM/DD HH:mm:ss');
      response.status(200).json({
        statusCode: 200,
        message: '正常なレスポンス',
        result: {
          id: crypto.randomUUID(), // 勤怠開始ID
          employeeNumber: request.query.employeeNumber,
          startTime: now,
        },
      });
    }
  }, SLEEP_TIME);
});

module.exports = router;
