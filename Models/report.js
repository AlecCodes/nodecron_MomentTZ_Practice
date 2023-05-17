const mongoose = require('./connection')

const reportSchema = new mongoose.Schema({
    date: Date
})

const report = mongoose.model("report", reportSchema)

module.exports = report;