const express = require('express');
const path = require('path');
const app = express();

// Set up the view engine and middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the home page form
app.get('/', (req, res) => {
    res.render('index');  // This will render the form component
});


// Route to handle form submission and render the results
app.post('/analyze', (req, res) => {
    const { makeModel, batteryAge, chargePercent, chargeCycles, batteryTemp, avgChargeTime, tempRange, fastChargeFreq } = req.body;

    // Basic analysis logic (placeholder for actual calculations)
    const batteryHealth = 100 - (chargeCycles * 0.1) - (batteryAge * 0.5) - (batteryTemp > 40 ? 10 : 0);
    const recommendations = batteryHealth > 80 ? "Battery is in good health. Maintain current practices." : "Consider moderating charging practices to improve battery life.";

    res.render('results', {
        makeModel,
        batteryAge,
        chargePercent,
        chargeCycles,
        batteryTemp,
        avgChargeTime,
        tempRange,
        fastChargeFreq,
        batteryHealth: batteryHealth.toFixed(2),
        recommendations
    });
});

// Route to render the complaint page form
app.get('/complaint', (req, res) => {
    res.render('complaint');  // This will render the complaint form
});

// Route to handle complaint form submission (optional, you can add logic here for saving complaints, etc.)
app.post('/complaint', (req, res) => {
    const { username, evNumber, problem, phone } = req.body;
    // You can add logic here to handle the complaint (save it to a database, send an email, etc.)
    res.send(Complaint submitted by ${username} for EV ${evNumber}. Problem: ${problem});
});

app.get('/calculator', (req, res) => {
    console.log('Calculator route accessed');
    res.render('calculator');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});  