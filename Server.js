const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());


connectDB();


app.use("/", bookRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.use("/", bookRoutes);