const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});
app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullname = firstName + ' ' + lastName;
  res.send(fullname);
});
function greetingmessage(username) {
  return 'hello ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetingmessage(username));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function subscriptionStatus(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' is subscribed';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/subscriptionStatus', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(subscriptionStatus(username, subscribed));
});
function diiiscountedPrice(price,discount){
  let finalprice=price-((price*discount)/100);
  return finalprice.toString();
}
app.get("/discountedPrice",(req,res)=>{
  let price=parseFloat(req.query.price);
  let discount=parseFloat(req.query.price);
  res.send(discountedPrice(price,discount));
})