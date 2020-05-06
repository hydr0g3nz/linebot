const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000
var path = require('path');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('*', (req, res) => {
  res.json({
    message: 'Error'
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
