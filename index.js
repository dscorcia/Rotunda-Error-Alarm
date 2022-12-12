const sendEmail = require("./helpers/sendEmail.helper");
const config = require ('./constants')

const errorData = {
    counter: 0,
    lastErrorDate: new Date(),
    mailSent: false
}
const logError = (error) => {
    const now = new Date();
    errorData.counter += 1;

        Math.abs(now.getTime() - errorData.lastErrorDate.getTime()) > 60000  && (errorData.mailSent = false)
        Math.abs(now.getTime() - errorData.lastErrorDate.getTime()) < 60000 && !errorData.mailSent && errorData.counter > config.LIMIT_ERROR && sendEmail(error) && (errorData.mailSent = true) && (errorData.lastErrorDate = new Date())
        console.log(`Error: ${JSON.stringify(error)}`);
}

logError('Memory error')

