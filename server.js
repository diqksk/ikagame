const express = require('express');
const { sequelize } = require('./models/index');
const userRouter = require('./routes/userRoute');

const app = express();

sequelize
  .sync()
  .then(() => console.log('connected database'))
  .catch(err => console.error('occurred error in database connecting', err));


app.use('/api',userRouter);

app.listen(3030,()=>{
    console.log("open server on 3030");
})
