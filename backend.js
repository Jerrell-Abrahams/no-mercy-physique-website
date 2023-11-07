const express = require("express");
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

const config = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "futureemailee@gmail.com",
    pass: "wrchaqpuvziauczj",
  },
};

const send = (data) => {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      return info.response;
    }
  });
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/join", (req, res) => {
  res.render("join");
});

app.post("/sent-message", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  console.log(name, email, phone, message);
  res.render("contact_successful");
});

app.get("/join_page", (req, res) => {
  res.render("join");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.post("/join_page", (req, res) => {
  const nameOfJoinPerson = req.body.nameOfJoinPerson;
  const phoneOfJoinPerson = req.body.phoneOfJoinPerson;
  const emailOfJoinPerson = req.body.emailOfJoinPerson;
  const data = {
    from: "jerrellabrahams50@gmail.com",
    to: emailOfJoinPerson,
    subject: "A new client wants to join",
    text: `A client by the name of ${nameOfJoinPerson} wants to join.\nContact them as soon as possible.\n\nContacts are:\n\t Cellphone: ${phoneOfJoinPerson}\n\t Email: ${emailOfJoinPerson}`,
  };
  send(data);

  res.render("contact_successful");
});

app.listen(3000 || "192.168.100.4", () => {
  console.log(`Example app listening on port ${port}`);
});
