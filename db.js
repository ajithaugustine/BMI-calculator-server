const mongoose = require ('mongoose')

const connectDB = async()=>{
    try {
      await mongoose.connect('mongodb+srv://ajith:ajith01@cluster01.l0yls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,useFindAndModify:true  })
      console.log('connected to mongodb')
      
  } catch (error) {
      console.log('error on connecting')
  }
}



module.exports = connectDB