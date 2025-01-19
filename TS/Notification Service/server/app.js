import express from "express"

const app = express();
const PORT = 3000;

import smsRoutes from "./routes/sms.js";
app.use("/sms", smsRoutes);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


