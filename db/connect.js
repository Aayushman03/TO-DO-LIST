const mongoose=require('mongoose')

const connectionString='mongodb+srv://MOMO:Pratap@3@nodetask.uv6gd.mongodb.net/TaskManager?retryWrites=true&w=majority'

const connectDB=(url)=>{
return mongoose
.connect(connectionString, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}

module.exports=connectDB;
