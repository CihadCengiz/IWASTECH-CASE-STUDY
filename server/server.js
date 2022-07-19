const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()
var corsOptions = {
    origin: "http://localhost:3001"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./db/models')
db.sequelize.sync();


require('./api')(app)

// app.use(express.static(path.join(__dirname, './../build')));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "/client/build")));
   // Handle React routing, return all requests to React app  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
  }

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})