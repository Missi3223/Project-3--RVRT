const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    map_id: {
      type:Object,
      required:true
    },
    town: {
      type:String,
      required:true
    },
    search_type:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    about:{
      type:String,
      required:false
    },
    link:{
      type:String,
      required:true
    },

  },
  { timestamps:true }
);
const Data = mongoose.model('Data', DataSchema);
module.exports = Data
// export the new Schema so we could modify it using Node.js
// module.exports = mongoose.model("Data", DataSchema);
