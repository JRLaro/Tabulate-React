const express = require("express");
const connectDB = require("./config/db");
const path = require('path');
// initialize express into 'app'
const app = express();

//connect Database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

// testing route
app.get("/", (req, res) => res.json({ msg: "Tabulate" }));

//define ROUTES

app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get(
    "*",
    (req,
    (res) =>
      res.sendFile(path.resolve(_dirname, "client", "build", "index.html")))
  );
}

//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
