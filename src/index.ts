import * as mailer from 'nodemailer';


let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sendmailwithnode1234@gmail.com',
        pass: 's1s2s3s4s5'
    }
});

let options: any = {
    from: 'sendmailwithnode1234@gmail.com',
    to: 'ynon.lo@gmail.com',
    subject: 'first mail',
    text: 'here is the text'
};
transporter.sendMail(options, (err, info) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('mail sent: ' + info);
    }
});