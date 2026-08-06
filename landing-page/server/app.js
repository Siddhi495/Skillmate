const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SkillMate Backend is Running 🚀");
});

// ================= REGISTER =================
app.post("/signup", async (req, res) => {
   const {
    name,
    email,
    password,
    phone,
    city,
    college,
    skill,
    experience,
    bio,
    linkedin,
    github,
 
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const role = "student";
    const sql =
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, hashedPassword, role], (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "User registered successfully",
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ================= LOGIN =================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (result.length === 0) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      }

     res.json({
  success: true,
  message: "Login successful",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});
    }
  );
});


// ================= SEND MESSAGE =================
app.post("/messages", (req, res) => {

    console.log("----------- NEW MESSAGE -----------");
    console.log(req.body);

    const { sender_id, receiver_id, message } = req.body;

    console.log("Sender:", sender_id);
    console.log("Receiver:", receiver_id);
    console.log("Message:", message);

    const sql =
    "INSERT INTO messages(sender_id,receiver_id,message) VALUES(?,?,?)";

    db.query(sql,[sender_id,receiver_id,message],(err,result)=>{

        if(err){
            console.log("MYSQL ERROR");
            console.log(err);

            return res.status(500).json(err);
        }

        console.log("Inserted Successfully");

        res.json({
            success:true
        });

    });

});
// ================= GET CHAT =================
app.get("/messages/:sender/:receiver", (req, res) => {
  const { sender, receiver } = req.params;

  const sql = `
    SELECT *
    FROM messages
    WHERE
      (sender_id=? AND receiver_id=?)
      OR
      (sender_id=? AND receiver_id=?)
    ORDER BY created_at ASC
  `;

  db.query(
    sql,
    [sender, receiver, receiver, sender],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json(result);
    }
  );
});
// ================= GET MENTORS =================
app.get("/mentors", (req, res) => {
  db.query(
    "SELECT id, name, role, skill, experience FROM users WHERE role='mentor'",
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json(result);
    }
  );
});
module.exports = app;