const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL =`mongodb+srv://gain:${process.env.DB_PASSWORD}@cluster0.nmbmjkt.mongodb.net/posts?retryWrites=true&w=majority`
console.log(URL);
const connect = async ()=>{
  try{
      await mongoose.connect(URL, {
      useNewUrlParser: true, useUnifiedTopology: true
      },);
      console.log('Connected to MongoDB');
  }catch(err){
    console.log(err);
  }
}

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect(); 
});
module.exports = connect;