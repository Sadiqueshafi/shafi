const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://post:sadique@123@cluster0-l08tx.mongodb.net/jachghar',{ useNewUrlParser: true},(err)=>{
  if(!err){
      console.log('Mongdb connect successfully');
  }
  else{
      console.log('error in database collections'+JSON.stringify(err,undefined,2))
  }
})

module.exports =mongoose;
