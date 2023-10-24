const nodemailer = require('nodemailer');

const sendOrderConfirmation = async (orderDetails, customerEmail) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'xyz@gmail.com',
      pass: 'password' 
    }
  });

  let mailOptions = {
    from: 'youremail@gmail.com', 
    to: customerEmail, 
    subject: 'Order Confirmation', 
    text: `Thank you for your order! Your order details: ${JSON.stringify(orderDetails)}`, 
    html: `<b>Thank you for your order!</b><p>Your order details: ${JSON.stringify(orderDetails)}</p>` 
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendOrderConfirmation;
