// Initialize EmailJS with your User ID
emailjs.init("Bdy2avurldMInJFlj");

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('clientname').value;
    const email = document.getElementById('clientemail').value;
    const mobileno = document.getElementById('clientphone').value;
    const message = document.getElementById('clientmessage').value;

    // Send the email using EmailJS
    emailjs.send("service_4yfr4kr", "template_e7avomf", {
        name: name,
        email: email,
        mobileno:mobileno,
        message: message
    })
    .then(function(response) {
        console.log("Email sent successfully!", response);
        alert('Thank you for your message! We will get back to you soon.');
    }, function(error) {
        console.log("Error sending email:", error);
        alert('An error occurred while sending the email. Please try again later.');
    });
});
