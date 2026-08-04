const express = require("express");
const {connectToMongoDB}=require("./connect");
const urlRoute=require("./routes/url");
const app=express();
const URL=require('./models/url');
const PORT =8000;

connectToMongoDB("mongodb://localhost:27017/short-url").then(
    console.log("Mongodb connected")
);

app.get('/:shortId',async (req,res)=>{
 const shortId=req.params.shortId;
 const entry= await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
       $push:{
        visitHistory:{
            timestamp:Date.now(),
        },
       } ,
    }
 );
 res.redirect(entry.redirectURL);
})

app.use(express.json());
app.use("/url",urlRoute);
app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`));