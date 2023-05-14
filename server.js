const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4001
const cron = require('node-cron')
const moment = require('moment-timezone');
const LA_TIMEZONE = 'America/Los_Angeles';
const now = new Date()

cron.schedule("*/04 * 8-12 * * *" , () => {
    console.log('running tast every 4 seconds from 8-noon')
    console.log('current date: ', now.toLocaleString('en-us', {timezone: LA_TIMEZONE}))
}, {timezone: LA_TIMEZONE});



//listener
app.listen(PORT, () => console.log(`TURNING UP ON PORT ${PORT}`))