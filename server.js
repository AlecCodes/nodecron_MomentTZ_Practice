const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4001
const cron = require('node-cron')
const moment = require('moment-timezone');
const LA_TIMEZONE = 'America/Los_Angeles';

cron.schedule("*/1 8-17 * * *" , () => {
    const now = moment.tz(LA_TIMEZONE)
    console.log('running task every minute from 8-5pm')
    console.log('current date: ', now.toLocaleString())
}, {timezone: LA_TIMEZONE});



//listener
app.listen(PORT, () => console.log(`TURNING UP ON PORT ${PORT}`))