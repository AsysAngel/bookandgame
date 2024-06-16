const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const comment = document.getElementById('description');
const submit = document.getElementById('contact-form');

submit.addEventListener('submit',(e)=>{
    e.preventDefault(); //prevents form from resetting after submitting
    console.log("Clicked"); //sends a clicked message to the console log

    //This is the body portion of the email I get sent
    let ebody = `
    <b>Name: </b>${name.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone no: </b>${phone.value}
    <br>
    <b>Comment: </b>${comment.value}
    <br>
    `

    Email.send({ //sends me an email through elastic email
        SecureToken : "e9dfd329-00a7-4256-91eb-2768b7ef700a",
        Username : "eherzog2001@gmail.com",
        Password : "59DE70B5FC5E05BDCCE05C1CA1B015A94958",
        To : 'eherzog2001@gmail.com',
        From : "eherzog2001@gmail.com",
        Subject : "New Contact Form Enquiry from " + email.value,
        Body : ebody
    }).then(
        message => alert("Message Sent Successfully")
    );
})