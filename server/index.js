const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.post("/send-email", async (req, res) => {

    const { fullName, email, phone, message } = req.body;
    if (!fullName || !email || !message) {
    return res.status(400).json({ message: "Required fields missing" });
}

    try {

        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD
        //     }
        // });
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
   const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  replyTo: email,
  subject: `New Quote Request - ${fullName}`,
  text: `
NEW QUOTE REQUEST

Name: ${fullName}
Email: ${email}
Phone: ${phone}

Message:
${message}
`
};

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Email failed" });

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});