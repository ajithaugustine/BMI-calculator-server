const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const BMIschema = new Schema({
    height:{
        type:Number,
        require:true,

    },
    weight:{
        type:Number,
        require:true
    },
    bmi:{
        type:Number,
        require:true
    }
})

const BMI = mongoose.model('BMI', BMIschema)
module.exports=BMI
