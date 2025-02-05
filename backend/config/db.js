const mongoose = require('mongoose')

const mongoDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB Connected✅`)
  } catch (error) {
    console.log("error❌",error)
    process.exit(1)
  }
}

module.exports = mongoDB