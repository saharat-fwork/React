const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");

router.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

router.get("/getStudents", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qryStudent = `SELECT * FROM students`;

      conn.query(qryStudent, (err, result) => {
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log("call - GET student");
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});
router.get("/getScore", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    let str = ``;
    try {
      const qryScore =
        `  SELECT school_subject.subject, student_score.score
                            FROM student_score
                            INNER JOIN school_subject 
                            ON school_subject.id = student_score.subject_id
                            WHERE student_score.student_id = ` +
        { qryStudent } +
        `
        `;
      conn.query(qryScore, (err, result) => {
        if (err) throw err;

        res.send(JSON.stringify(result));
        console.log("call - GET score");
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/addStudents", async (req, res) => {
  const students_firstName = req.body.students_firstName;
  const students_lastName = req.body.students_lastName;
  const student_class = req.body.student_class;
  const student_gender = req.body.student_gender;

  pool.getConnection((err, conn) => {
    if (err) throw err;

    const qry = `INSERT INTO tbl_students (first_name, last_name, id_class, gender) VALUES(?,?,?,?)`;
    conn.query(
      qry,
      [students_firstName, students_lastName, student_class, student_gender],
      (err, result) => {
        conn.release();
        if (err) throw err;
        console.log("Student added!");
      }
    );

    res.redirect("/getStudents");
    res.end();
  });
});

router.post("/addScore", async (req, res) => {
  const student_id = req.body.student_id;
  const subject_id = req.body.subject_id;
  const score = req.body.score;

  pool.getConnection((err, conn) => {
    if (err) throw err;

    const qry = `INSERT INTO tbl_score (id_student, id_subject, score) VALUES(?,?,?)`;
    conn.query(qry, [student_id, subject_id, score], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Score added!");
    });

    res.redirect("/getStudents");
    res.end();
  });
});

module.exports = router;
