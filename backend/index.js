const { request } = require("express");
const express = require("express");
const app = express();
const data = [];

// db
// import connection from './database';
const connection = require("./database");

// 추가
app.use(express.json()); //json 형태로 parsing
app.use(express.urlencoded({ extended: false }));

app.get("/api/memos", (req, res) => {
  // 쿼리 날려서 가져오기
  const result = connection.query(
    "SELECT * from Memo",
    (error, rows, fields) => {
      res.send(rows);
    }
  );
});

app.post("/api/memos", async (req, res) => {
  const result = await connection.query(
    "insert into Memo(content) values('" + req.body.content + "')"
  );
  res.status(200).send();
});

app.put("/api/memos/:idx", async (req, res) => {
  const result = await connection.query(
    "Update Memo set content = '" +
      req.body.content +
      "' where id=" +
      req.params.idx
  );

  res.status(200).send();
});

/* DELETE meetingrooms listing. */
app.delete("/api/memos/:idx", function (req, res, next) {
  if (!req.params.idx) {
    res.status(500).send("Id is not exist.");
    return;
  }

  const query = `DELETE FROM Memo WHERE id = ${req.params.idx};`;

  connection.query(query, (error, result) => {
    res.status(200).send({});
  });
});

//회원가입
app.post("/api/member/regist/", async (req, res) => {
  console.log(req.body.email, req.body.password);

  const query = `insert into Member(email,password) values('${req.body.email}','${req.body.password}');`;

  connection.query(query, (error, result) => {
    if (!error) {
      res.status(200).send({});
    }
  });
});

//로그인
app.post("/api/member/login/", async (req, res) => {
  console.log(req.body.email, req.body.password);

  const query = `select * from Member where email='${req.body.email}' and password='${req.body.password}';`;

  console.log(query);

  connection.query(query, (error, result) => {
    if (!error) {
      if (result) {
        res.status(200).send(result);
      }
    } else {
      res.status(401).send({});
    }
  });
});

app.listen(3000);
