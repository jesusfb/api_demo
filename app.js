import  express  from "express";
import { router as products_routes } from "./routes/products.js";
import { connectDB ,connectionDB} from "./db/connect.js";
import dotenv from "dotenv";
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";
dotenv.config();
const app = express();
const PORT = 8000;



const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Express js API project with monogodb",
            version:"1.0.0"
        },
        servers:[
            {
                url:'http://localhost:8000'
            }
        ],
    },
    apis:['./routes/*.js']
}
const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to home page")
});
app.use(express.json()); // to read json data


app.use("/api/products",products_routes);
const start = async ()=>{
    try{
       
        await connectDB(process.env.MONGODB_URL);
        const database = connectionDB();
        database.on('error', (error) => {
            console.log(error)
        })
        
        database.once('connected', () => {
            console.log('Database Connected');
        })
        
        app.listen(PORT, ()=>{
            console.log(PORT, "Hi I am listening");
        })
    }catch(err){
        console.log(err);
    }
}
start();