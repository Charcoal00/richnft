require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        // countryCode,
        // contactNumber,
        message,
    } = req.body;

    if (
        !firstName ||
        !lastName ||
        !email ||
        // !countryCode ||
        // !contactNumber ||
        !message
    ) {
        return res.status(400).json({
            error: "All fields are required.",
            details: "Missing form data.",
        });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Invalid email format.",
            details: `Provided email: ${email}`,
        });
    }

    // const fullContactNumber = `${countryCode}${contactNumber}`;

    const recipientEmail = "only1tef@gmail.com";

    const emailSubject = `New Contact Form Submission from ${firstName} ${lastName}`;

    const emailHtmlBody = `
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>$RICH Contact Form Submission</title>
            <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Sen', sans-serif;
                    background-color: #0a0a0a; /* Matches your --background */
                    color: #e0e0e0; /* Matches your --text-color */
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #1f1f1f; /* Matches your --secondary-color */
                    border-radius: 10px;
                    overflow: hidden;
                    border: 1px solid #444; /* Subtle border for definition */
                }
                .header {
                    background-color: #111214; /* Darker header */
                    padding: 20px 30px;
                    text-align: center;
                    border-bottom: 1px solid #333;
                }
                .header .logo {
                    font-size: 28px;
                    color: #e0e0e0;
                    font-weight: 700;
                }
                .header .logo span {
                    color: #ffcc00; /* Primary color accent */
                }
                .content {
                    padding: 30px;
                    line-height: 1.6;
                }
                .content h2 {
                    color: #ffcc00; /* Primary color for heading */
                    font-size: 22px;
                    margin-bottom: 20px;
                    font-weight: 700;
                    text-align: center;
                }
                .info-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                .info-table td {
                    padding: 10px 0;
                    border-bottom: 1px solid #2a2a2a; /* Lighter border for readability */
                    vertical-align: top;
                }
                .info-table td strong {
                    color: #ffffff; /* Highlight labels */
                    display: inline-block;
                    min-width: 120px; /* Align labels */
                }
                .message-box {
                    background-color: #141414; /* Even darker for message box */
                    border: 1px solid #333;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 25px;
                }
                .message-box p {
                    white-space: pre-wrap; /* Preserve line breaks from textarea */
                }
                .footer {
                    background-color: #111214; /* Matches header background */
                    padding: 20px 30px;
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                    border-top: 1px solid #333;
                }
                .footer a {
                    color: #ffcc00;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="logo"><span>$</span>RICH</div>
                </div>
                <div class="content">
                    <h2>New Contact Form Inquiry</h2>
                    <p>You have received a new message from the contact form on your $RICH website.</p>
                    <table class="info-table">
                        <tr>
                            <td><strong>Name:</strong></td>
                            <td>${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td><strong>Email:</strong></td>
                            <td><a href="mailto:${email}" style="color: #ffcc00; text-decoration: none;">${email}</a></td>
                        </tr>
                        
                    </table>
                    <div class="message-box">
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                    <p style="margin-top: 30px; text-align: center; color: #aaa;">
                        This message was sent via the $RICH website contact form.
                    </p>
                </div>
                <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} $RICH Certified. All rights reserved.</p>
                    <p>
                        <a href="mailto:${
                            process.env.EMAIL_USER
                        }" style="color: #ffcc00;">Contact Rich Support</a>
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;

    const mailOptions = {
        from: `"Rich" <${process.env.EMAIL_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtmlBody,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            error: "Failed to send email.",
            details: error.message,
        });
    }
});

app.get("/message", (req, res) => {
    console.log("Backend /message endpoint hit!");
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
