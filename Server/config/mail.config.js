import mailgun from 'mailgun-js';

export function initializeMailgun(){
    return mailgun({
        apiKey : process.env.MAILGUN__API,
        
        // domaim : "sandbox56b1ee7f95c3457095f2ad504f3d3631.mailgun.org"
        domain : process.env.MAILGUN__domain
    });
}