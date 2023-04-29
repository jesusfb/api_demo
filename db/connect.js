import mangoose from "mongoose";

export const connectDB = (uri) =>{
    console.log("conneting to db");
    return mangoose.connect(uri,
        {
            useNewUrlParser : true,
            useUnifiedTopology:true,
        });
}

export const connectionDB =()=>{
    return mangoose.connection;
}