const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan"); //morgan 모듈 추가

const app = express();
const port = 8000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.listen(port, () => {
  console.log(`the server is running http://localhost:${port}`);
});
