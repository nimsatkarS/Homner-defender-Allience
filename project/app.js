const express = require("express")
const app = express()
const bodyParser = require('body-parser');

const bcrypt = require("bcrypt")//imp bcrypt package

app.set('view engine', 'ejs');
app.use(express.static('public'))

const users = []

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended:false}))

app.post("/login", async (req, res) => {
  console.log(req.body);
  let userName = req.body.username;
  let userEmail = req.body.useremail;
  let userPassword = req.body.userpassword;
  let userPhoneNo = req.body.userphoneno;
  let userAadhaarNo = req.body.useradhaarno;

  console.log("Actual Password: " + userPassword);
  

  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10)
    console.log("Hashed Password: " + hashedPassword);
    let password = await bcrypt.compare(userPassword,hashedPassword);
    console.log("Password: " + password);
    users.push({
      // id: new Date().toString(),
      name: userName,
      email: userEmail,
      password: hashedPassword,
      phoneno: userPhoneNo,
      aadhaarno: userAadhaarNo,
    })
    console.log("Users Array: "+ JSON.stringify(users));
    res.redirect("/login")
  } catch (e) {
    console.log(e);
    res.redirect("/homePage")
  }
  // res.send("<h1>Thank you</h1>");
})

app.get('/', (req, res) => {
  res.render("homePage")
})

app.get('/Menu', (req, res) => {
  res.render("Menu.ejs")
})

app.get('/review', (req, res) => {
  res.render("review.ejs")
})
app.get('/login', (req, res) => {
  res.render("login")
})
//end roues


app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else console.log("Server running on port 5000!");
  
})
