var mysql = require('mysql');

var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'node'
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Yah! we are Connected!:)');
  }
});

module.exports = connection;

