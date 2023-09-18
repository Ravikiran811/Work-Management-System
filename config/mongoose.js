//user needs to have the functionalities of mongoose
//because it works as  middleware of user and database
//we must aquire it in js file because js has built in librarys of mongoose
const mongoose = require('mongoose');

//user needs to connect database with mongoose 
mongoose.connect('mongodb://127.0.0.1/DailyTask_db');

//db will aquire the functionalities of mongoose connection
const db = mongoose.connection;


//this method will bind the error with user explecitly gaved error
db.on('error',console.error.bind(console,'error occured bro'))


//this function is used to know if database works normally
db.once('open',function(){
    console.log('successfully connected to thedata base');
})