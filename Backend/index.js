const express = require("express");
const user = require("./Schema");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.API_URL);
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const user1 = await user.create({
    name: name,
    email: email,
    password: password,
  });
  console.log("created ");
  res.send("Sucessfully created");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user1 = await user.findOne({ email: email });
    if (user1.email === email) {
      if (user1.password === password) {
        res.send("Login successful").status(200);
      } else {
        res.send("Incorrect password");
      }
    } else {
      res.send("User does not exist");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
