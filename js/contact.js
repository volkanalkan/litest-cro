function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "volkanalkan35@gmail.com",
    Password: "122111.Va",
    To: "volkanalkan2001@hotmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message))
}
