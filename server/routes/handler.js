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
        const qry = `SELECT * FROM tbl_students`;

      // const qry = ` 
      //                 SELECT tbl_students.id, tbl_students.first_name, tbl_students.last_name, tbl_class.class_group, tbl_gender.gender
      //                 FROM tbl_students
      //                 JOIN tbl_gender
      //                 ON tbl_students.id_gender = tbl_gender.id
      //                 JOIN tbl_class
      //                 ON tbl_students.id_class = tbl_class.id
      // `;
                    
      conn.query(qry, (err, result) => {
        // conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
        console.log("call - GET");
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
    conn.query(
      qry,
      [student_id, subject_id, score],
      (err, result) => {
        conn.release();
        if (err) throw err;
        console.log("Score added!");
      }
    );

    res.redirect("/getStudents");
    res.end();
  });
});

module.exports = router;
