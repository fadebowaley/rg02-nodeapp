var mysql = require('mysql');

var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'laravel_example'
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Yah! we are now Connected!:)');
  }
});

module.exports = connection;

