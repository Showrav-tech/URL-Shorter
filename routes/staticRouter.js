const express = require("express");

const router = express.Router();

router.get("/", async (req,res)=>{
const allurls=await URL.find({});s
    return res.render("home",{
        urls:allurls,
    });
});

module.expoert=router;
