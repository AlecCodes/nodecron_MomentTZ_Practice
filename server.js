const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4001
const cron = require('node-cron')
const moment = require('moment-timezone');
const LA_TIMEZONE = 'America/Los_Angeles';
const report = require('./Models/report')


cron.schedule("*/1 8-20 * * *" , () => {
    const now = moment.tz(LA_TIMEZONE).format('YYYY-MM-DD HH:mm:ss')
    const document = {date : now}
    report.create(document)
    console.log('running task every minute from 8-8pm')
    console.log('current date: ', now)
}, {timezone: LA_TIMEZONE});


//listener
app.listen(PORT, () => console.log(`TURNING UP ON PORT ${PORT}`))