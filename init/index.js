const mongoose=require("mongoose");
const initData=require("./data.js");   //object with key data
const Listing=require("../models/listing.js");


main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  
    
  }

  const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'6803d5e07d501cce2e0df6e5'}));
    await Listing.insertMany(initData.data)  // because in module we have send object with key data which has whole data
    console.log("data was initialized");
  } 

  initDB();
