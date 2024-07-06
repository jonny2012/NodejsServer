import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload"
import * as path from "path"
import cors from "cors"


import { fileURLToPath } from "url"


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("static"))
app.use(fileUpload({}))
app.use("/api", router) // localhost:5000/api/posts


router.get("/api", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     }); // это нужно чтобы  можно было отправлять запросы   по localhost 

const uri = "mongodb+srv://vaneass21:<password>@cluster0.xhjrl8r.mongodb.net/?appName=Cluster0";
        // я убрал пароль потому что  в github не желательно сохранять доступ к чему либо

async function startApp(){

    try{
        await mongoose.connect(uri)
        app.listen(PORT)
    }
    catch(e){
        console.log(e)
    }
}

//npm run dev 
startApp().catch(console.dir)

 
