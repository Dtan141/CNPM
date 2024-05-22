import express from "express";
import bodyParser from "body-parser";
// import pg from "pg";

const app = express();
const port = 3000;

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "newdb",
//   password: "sql123",
//   port: 5432,
// });
// db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login/signup.ejs");
});

app.get("/login", (req, res) => {
  res.render("login/login.ejs");
});

app.post("/login", (req, res) => {
  res.render("login/login.ejs");
});

app.post("/signup", (req, res) => {
  res.render("login/signup.ejs");
});
// app.post("/dologin", async (req, res) => {
//   const username = req.body.username;
//   const matkhau = req.body.password;

//   try {
//     const result = await db.query("SELECT * FROM users WHERE username = $1", [
//       username,
//     ]);
//     if (result.rows.length > 0) {
//       const user = result.rows[0];
//       const dbpassword = user.matkhau;
//       if (matkhau === dbpassword) {
//         res.render("user/main.ejs", {
//           username: user.username,
//           email: user.email,
//           hovaten: user.hovaten,
//           sdt: user.sodienthoai,
//         });
//       } else {
//         res.send("Incorrect Password");
//       }
//     } else {
//       res.send("User not found");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

//man hinh thong tin/man hinh chinh
app.get("/staffmain", (req, res) =>{
  res.render("staff/Staff_MainScreen.ejs");
})

app.post("/staffmain", (req, res) =>{
  res.render("staff/Staff_MainScreen.ejs");
})

app.post("/staffinfo", (req, res) => {
  res.render("staff/Staff_MainScreen.ejs");
});

app.get("/staffinfo", (req, res) => {
  res.render("staff/Staff_MainScreen.ejs");
});

//tiep nhan sanh

app.post("/stafflobby", (req, res) => {
  res.render("staff/Staff_LobbyReception.ejs");
});

app.get("/stafflobby", (req, res) => {
  res.render("staff/Staff_LobbyReception.ejs");
});

//tra cuu
app.post("/stafflookup", (req, res) => {
  res.render("staff/Staff_lookUp.ejs");
});

app.get("/stafflookup", (req, res) => {
  res.render("staff/Staff_lookUp.ejs");
});


//lap hoa don thanh toan
app.get("/stafflistbill", (req, res) =>{
  res.render("staff/Staff_ListBill.ejs");
})

app.post("/stafflistbill", (req, res) =>{
  res.render("staff/Staff_ListBill.ejs");
})

//--> hoa don chua thanh toan
app.get("/unpaidbill", (req, res) =>{
  res.render("staff/Staff_ListBill_Unpaid.ejs");
})

app.post("/unpaidbill", (req, res) =>{
  res.render("staff/Staff_ListBill_Unpaid.ejs");
})

//--> hoa don da thanh toan
app.get("/paidbill", (req, res) =>{
  res.render("staff/Staff_ListBill_PaidBill.ejs");
})

app.post("/paidbill", (req, res) =>{
  res.render("staff/Staff_ListBill_PaidBill.ejs");
})


//thay doi quy dinh
app.get("/staffchangerule", (req, res) =>{
  res.render("staff/Staff_ChangeRule.ejs");
})

app.post("/staffchangerule", (req, res) =>{
  res.render("staff/Staff_ChangeRule.ejs");
})

//lap bao cao
app.get("/staffreport", (req, res) =>{
  res.render("staff/Staff_MonthlyReport.ejs");
})

app.post("/staffreport", (req, res) =>{
  res.render("staff/Staff_MonthlyReport.ejs");
})

app.listen(port, () => {
  console.log("listening on port " + port);
});



// app.post("/dosignup", async (req, res) => {
//   const hovaten = req.body.hovaten;
//   const username = req.body.username;
//   const email = req.body.email;
//   const matkhau = req.body.matkhau;
//   const sodienthoai = req.body.sodienthoai;

//   const result = await db.query(
//     "INSERT INTO users (username, hovaten, email, matkhau, sodienthoai) VALUES($1, $2, $3, $4, $5) RETURNING *;",
//     [username, hovaten, email, matkhau, sodienthoai]
//   );

//   res.redirect("/login");
// });



