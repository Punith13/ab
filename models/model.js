const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const TimelinePointSchema = new Schema({
    
    id : Number, 
    focus : Boolean, 
    tag : String, 
    lat : Number , 
    lng : Number , 
    cnLat : Number , 
    cnLng : Number , 
    rad : Number , 
    zoom : Number , 
    progressBarWidth : Number ,
    path : String 

}); 

const TimelinePoint = mongoose.model('timelinepoint' , TimelinePointSchema ); 

module.exports = TimelinePoint; 