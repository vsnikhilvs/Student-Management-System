const express = require("express");
const cors = require("cors");
const ExamData = require("./ExamData");
var bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/StudentDb");
var app = new express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//------------------ADD-----------------------//
app.post("/add", (req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE");
    var student={
        examName: req.body.examName,
        noofsub: req.body.noofsub,
        nos1: req.body.nos1,
        mos1: req.body.mos1,
        nos2: req.body.nos2,
        mos2: req.body.mos2,
        nos3: req.body.nos3,
        mos3: req.body.mos3,
        nos4: req.body.nos4,
        mos4: req.body.mos4
    }
    // console.log(student);
    var student = new ExamData(student);
    student.save();
})
//------------------GET-----------------------//
app.get("/get",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE");
    ExamData.find()
    .then(function(details){
        console.log(details);
        res.send(details);
    })
})
//------------------UPDATE--------------------//
app.post("/update",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE");
    ExamData.findOne({_id:req.body.id},function(err, foundObj){
        if(err) {
            console.log(err);
        } else {
            console.log(foundObj);
            foundObj.mos1 = req.body.editItem.cmos1;
            foundObj.mos2 = req.body.editItem.cmos2;
            foundObj.mos3 = req.body.editItem.cmos3;
            foundObj.mos4 = req.body.editItem.cmos4;
            foundObj.save();
            console.log(foundObj);
        }
    })
})
//------------DELETE-------------------//
app.delete('/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
    var id = req.params.id;
    ExamData.findByIdAndDelete({"_id":id}, (err,foundObj)=>{
        if (err) console.log(err);
    });
})
//---------------LISTEN-----------------------//
app.listen(3000);