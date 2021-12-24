const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Users = require("./models/Users");
const PORT = 8000;

connectDB();

console.log(Users);

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("This is from home side");
});

app.use("/api/register", require("./routes/api/users"));
app.use("/api/login", require("./routes/api/auth"));
app.use("/api/post", require("./routes/api/post"));

app.listen(PORT, () =>{
    console.log("This is listening port", PORT);
});