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

app.use(express.static(path.join(__dirname,'views')))

app.listen(PORT,()=>
    {console.log('Server is running on http://localhost:${PORT}')})