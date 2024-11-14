const mongoose = require('mongoose');

const batteryDataSchema = new mongoose.Schema({
    makeModel: String,
    batteryAge: Number,
    chargePercent: Number,
    chargeCycles: Number,
    batteryTemp: Number,
    avgChargeTime: Number,
    tempRange: String,
    fastChargeFreq: Number,
    batteryHealth: Number
});

module.exports = mongoose.model('BatteryData', batteryDataSchema);
