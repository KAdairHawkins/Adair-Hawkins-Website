const = require('express');
const app = express();

app.get('/', function(req, res){(
  res.send("I am now a published developer!");
)};

app.listen(process.env.PORT, function(){
  console.log("Example app is listening on " + process.env.PORT);
});
