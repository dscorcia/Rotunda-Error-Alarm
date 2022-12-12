require('dotenv').config()
const config={
    LIMIT_ERROR: process.env.LIMIT_ERROR | 10
}
module.exports = config