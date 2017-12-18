let express = require("express")

let PORT = 8080

let app = express()

app.get("/", (req, res) => {
  res.send([ "here be dragons" ])
})

app.listen(PORT)
