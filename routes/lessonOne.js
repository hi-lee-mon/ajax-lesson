const express = require("express");
const logger = require("../logger");
const router = express.Router();

router.get("/", logger ,(request, response) => {
  response.status(200).send("lessonOneです");
})

router.get("/:id", (request, response) => {
  response.status(200).send(`${request.params.id}のユーザ`);
})

router.post("/:id", (request, response) => {
  response.status(200).send(`${request.params.id}のユーザ`);
})

router.delete("/:id", (request, response) => {
  response.status(200).send(`${request.params.id}のユーザ`);
})

router.put("/:id", (request, response) => {
  response.status(200).send(`${request.params.id}のユーザ`);
})

module.exports = router;