const express = require("express");

// initialize express into "app"
const app = express();

//route
// app.get('/', (req, res)=> res.send('Tabulate'))
app.get("/", (req, res) => res.json({ msg: "Tabulate" }));



//define ROUTES

app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/auth', require('./routes/auth'))




//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
