const mongoose = require('mongoose')

const connectDB = (url)=>{
  return mongoose
      .connect(url)
      .then(() => console.log('Connected to the Database Store API'))
      .catch((error) => console.log(error))
}

module.exports = connectDB