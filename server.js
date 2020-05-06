const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/',function(req,res) {res.sendFile('index.html')})


app.get('*', (req, res) => {
  res.json({
    message: 'Error'
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
