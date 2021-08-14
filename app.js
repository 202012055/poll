'use strict';
const express=require('express');
const app=express();
const poll=require("./routes/poll.js");

app.use("/",poll);
app.use(express.static('public'));

app.listen(3000,()=>console.log("-------------server listening-----------------"));

