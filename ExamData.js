const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/StudentDb');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    examName: String,
    noofsub: Number,
    nos1: String,
    mos1: Number,
    nos2: String,
    mos2: Number,
    nos3: String,
    mos3: Number,
    nos4: String,
    mos4: Number 
});

var Examdata = mongoose.model('student', NewProductSchema);

module.exports = Examdata;