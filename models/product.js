import mangoose from "mongoose";

const productSchema = new mangoose.Schema({
    name:{
        type:String,
        required:[true,"name must be provided"],
    },
    price:{
        type:Number,
        requried:[true,"price must be provided"]
    },
    company:{
        type:String,
        required:[true,"company name must be provided"],
        enum:{
            values:[
                "apple","samsung","dell","mi"
            ],
            message:`{value} is not supported`
        }
    },
    featured:{
        type:Boolean,
        default:false,
    },
    ratings:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    
});

export const Product =  mangoose.model('Product',productSchema);
