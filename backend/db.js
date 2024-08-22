const mongoose=require('mongoose')
const mongoURI="mongodb+srv://psktechnologiesashwini2021:aknhEGAmgO7F2JbH@nagpurdial.ozrhu.mongodb.net/l"
const connectToMongo=async()=>{
    try{
        mongoose.set('strictQuery',false)
        mongoose.connect(mongoURI)
        
        console.log("mongo connected")
    }
    catch(error){
        console.log(error)
        process.exit()
    }
}
module.exports=connectToMongo
