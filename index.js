import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { result: ""})
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const text = firstName + lastName;
  const letterCount = text.replace(/[^a-zA-Z]/g, "").length; // Count only letters
  res.render("index.ejs", { result: `Letter count: ${letterCount}`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
