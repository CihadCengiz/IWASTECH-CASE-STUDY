const express = require('express')
const cors = require('cors')
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

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})