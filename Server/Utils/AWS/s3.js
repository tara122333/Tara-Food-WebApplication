import AWS from 'aws-sdk';



const s3Bucket = new AWS.S3({
    // accessKeyId : process.env.AWS_S3_ACCESS_KEY,
    accessKeyId : "AKIA4NV6HRWODWVF6BED",
    // secretAccessKey : process.env.AWS_S3_SECRET_KEY,
    secretAccessKey : "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",
    region:"ap-south-1",
});

export const s3Upload = (options)=>{
    return new Promise((resolve,reject)=>
        s3Bucket.upload(options,(error,data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    );
};