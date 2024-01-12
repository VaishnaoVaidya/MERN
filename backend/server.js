const express = require("express");
const app = express();
const mongoose = require("mongoose");
const  dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

app.use(cors());

const userRoute = require("./routes/userRoute")
app.use(express.json());

mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000 , (err) =>{
        if (err) console.log(err);

        console.log("listening on port http://localhost:" + process.env.PORT ||  8000 );
    });

})
.catch((error)=>{
    console.log("error", error);
});

// app.use("/api/user" , userRoute);
app.use( userRoute);


