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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
