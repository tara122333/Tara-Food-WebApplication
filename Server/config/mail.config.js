import mailgun from 'mailgun-js';

export function initializeMailgun(){
    return mailgun({
        apiKey : "cdfc27942d6b8b48119236b7452716d1-2bab6b06-4bb6822f",
        // domaim : "sandbox56b1ee7f95c3457095f2ad504f3d3631.mailgun.org"
        domain : "sandboxa404e1d14748414b84ad72e7cb07b4fd.mailgun.org"
    });
}