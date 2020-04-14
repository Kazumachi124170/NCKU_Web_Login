const express = require('express');
const app = express();
const port = 8080;
app.get('/step1', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

var members = [
  {"name": "Kazuma", "password": "chi"},
  {"name": "Symbol", "password": "wu"}
];

app.get('/login', (req, res)=>{
  //console.log(req);
  //Check if username and password is right
  var exist=false;
  for(var i=0; i<members.length; i++){
    if(members[i].name==req.query.username&&members[i].password==req.query.password){
      exist=true;
      break;
    }
  }
  // Response
  if(exist==true){
    res.send(`{
      "exist": true,
      "text": "Welcome, ${req.query.username}"
    }`)
  }else{
    res.send(`{
      "exist": false,
      "text": "Sorry, invalid name or password"
    }`)
  }
})

app.use(express.static(`${__dirname}/login`))
