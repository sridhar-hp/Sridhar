const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { text } = require('body-parser');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contect',async (req,res)=>{
    const {name,email,message}=req.body;

    if(!name || !email || !message)
    {
      return res.status(400).send("all feelds are require");
        console.log(process.env.EMAIL_USER);
        console.log(process.env.EMAIL_PASS);
    }

    try
    {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:
            {
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }

        });

        const mailOptions={
            from:email,
            to:process.env.EMAIL_USER,
            subject:`the message form ${name}`,
            text:`from: ${name} <${email}> \n\n ${message}`
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({success:true ,message:"message send succusfullly"});
    }

    catch(error)
    {
        console.error("this error is sending email: ",error);
        res.status(500).json({success:false, message:"something wrong try again!"});
                console.log(process.env.EMAIL_USER);
        console.log(process.env.EMAIL_PASS);
    }
    

})


app.listen(3000 ,()=>{
    console.log("server run on http://localhost:3000");
});