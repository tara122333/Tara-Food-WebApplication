FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .



ENV JWT_PRIVATE_KEY="tarachandkumawatisgoodandbadboy"
ENV DB_URI=mongodb+srv://tara122333:Tara1181@tara-food-app.ytgsx.mongodb.net/?retryWrites=true&w=majority
ENV PORT=4000
ENV GOOGLE_CLIENT_ID=507199952697-ol7de4c2bub4l8kt3t60cbp8uhnsa6lk.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV AWS_S3_ACCESS_KEY=AKIA4NV6HRWODWVF6BED
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__API=358476bc1738f2522216a2c57e5a5e79-2bab6b06-adc2edd4
ENV MAILGUN__domain=sandbox40fe40047a124e8fa6d55307ed7918c4.mailgun.org
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build

CMD ["npm", "run", "start"]