import express from "express"

const app = express();
const PORT = 3000;
app.use(express.json());

import smsRoutes from "./routes/sms.js";
app.use("/sms", smsRoutes);

app.get('/',(req,res)=>{
    console.log("root called")
    res.status(200).json('success')
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


