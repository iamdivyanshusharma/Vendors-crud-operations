import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app=express()

const PORT =8000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views",'cafe.html')
    )
})

app.get("/",(req,res)=>{
    res.json('Hello')
    
})

app.use((req,res,next)=>{
    const secretCode =req.query.secret;
    if(secretCode==='1234'){
        req.isAuthorized= true;
    }
    else{
        res.isAuthorized= false;
    }
next();
});

app.get("/auth",(req,res)=>{
    if(isAuthorized){
        res.send("you are authorizes");

    }
    else{
        res.send("you are not authorized");
    }
})

app.use(express.static(path.join(__dirname,'views')))

app.listen(PORT,()=>
    {console.log(`Server is running on http://localhost:${PORT}`)})