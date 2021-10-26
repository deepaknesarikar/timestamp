const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function checkIfDate(date) {
  let regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
}

function convertToDate(input) {
  if (checkIfDate(input)){
    return new Date(input);
  } else {
    return new Date(parseInt(input));
  }
}

function createResponse(input) {
    let timestamp = convertToDate(input);
    return {
      "utc" : timestamp.toUTCString(),
      "unix" : timestamp.getTime()
    }

}

app.get('/api/:time', function(req, res) {
  
  
  console.log(req.params);
  
  res.status(200).send(createResponse(req.params.time));

});