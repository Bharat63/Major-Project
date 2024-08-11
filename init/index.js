const mongoose=require('mongoose');
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb+srv://bksharma1881:TT5dfjQIOEJlXYmL@cluster0.zd3my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    initdata.data= initdata.data.map((obj)=>({...obj, owner: "66b87e6a94d907133f729ecd"}));
    await Listing.insertMany(initdata.data);
    console.log("Initialized data");
}

initDB();