const mongoose=require('mongoose');
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then( () => console.log("Database connected Successfully "))  
    .catch( (error) => {
        console.log("Database not connected");
        console.error(error);
        process.exit(1)

    })
}