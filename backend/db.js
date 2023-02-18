const mongoose= require('mongoose')
const mongoUri= "mongodb://debojit:debo10star@ac-y4ytfox-shard-00-00.wdsnjr6.mongodb.net:27017,ac-y4ytfox-shard-00-01.wdsnjr6.mongodb.net:27017,ac-y4ytfox-shard-00-02.wdsnjr6.mongodb.net:27017/?ssl=true&replicaSet=atlas-b9wqg4-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectToMongo= ()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoUri, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports= connectToMongo;