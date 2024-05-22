const express = require('express');
const router = express.Router();
const nonAjaxMapOnePage = require('../pages/nonAjaxMapOne');
const nonAjaxMapTwoPage = require('../pages/nonAjaxMapTwo');
const nonAjaxMapThreePage = require('../pages/nonAjaxMapThree');

router.get('/one', (request, response) => {
  response.status(200).send(nonAjaxMapOnePage);
});

router.get('/two', (request, response) => {
  response.status(200).send(nonAjaxMapTwoPage);
});

router.get('/three', (request, response) => {
  response.status(200).send(nonAjaxMapThreePage);
});

module.exports = router;
