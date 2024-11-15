const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const moment = require('moment-timezone'); // To handle IST time zone
const app = express();
const path = require('path');


// Set up the view engine and middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/submit-complaint', (req, res) => {
    // Extract the form data from the request body
    const { username, evNumber, problem } = req.body;

    // Process the complaint (for example, store it in a database or send an email)
    console.log(`Complaint submitted by ${username} for EV ${evNumber}. Problem: ${problem}`);

    // Respond with a success message or redirect the user
    res.send(`Complaint successfully submitted by ${username} for EV ${evNumber}. Problem: ${problem}`);
});

app.get('/calculator', (req, res) => {
    console.log('Calculator route accessed');
    res.render('calculator');
});

// Render the FAQ page
app.get('/faq', (req, res) => {
    res.render('faq');  // This will render views/faq.ejs
});

// Route for serving the chatbot page
app.get('/chatbot', (req, res) => {
    res.render('chatbot'); // Renders the chatbot.ejs page
});

app.get('/', (req, res) => {
    res.render('index'); // Assuming index.ejs exists
});

// Serve the Community Forum page
app.get('/forum', (req, res) => {
    // Read the forum posts from a JSON file
    fs.readFile('./forumPosts.json', (err, data) => {
        if (err) {
            console.log("Error reading forum posts", err);
            return res.render('forum', { forumPosts: [] });
        }
        const forumPosts = JSON.parse(data);
        res.render('forum', { forumPosts });
    });
});

// Handle new question submission
app.post('/forum', (req, res) => {
    const { question } = req.body;
    const timestamp = moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'); // Current IST time

    // Create a new post object
    const newPost = {
        question: question,
        timestamp: timestamp,
        answer: null // Answer will be added later
    };

    // Read existing posts and add the new one
    fs.readFile('./forumPosts.json', (err, data) => {
        let forumPosts = [];
        if (!err) {
            forumPosts = JSON.parse(data);
        }

        forumPosts.push(newPost);

        // Save the updated posts back to the file
        fs.writeFile('./forumPosts.json', JSON.stringify(forumPosts, null, 2), (err) => {
            if (err) {
                console.log("Error saving new post", err);
                return res.redirect('/forum');
            }
            // Redirect to the forum page to display the new question
            res.redirect('/forum');
        });
    });
});

// Handle answer submission
app.post('/forum/answer/:timestamp', (req, res) => {
    const { answer } = req.body;
    const timestamp = req.params.timestamp;

    // Read existing posts
    fs.readFile('./forumPosts.json', (err, data) => {
        if (err) {
            console.log("Error reading forum posts", err);
            return res.redirect('/forum');
        }

        let forumPosts = JSON.parse(data);

        // Find the post by timestamp and update the answer
        const postIndex = forumPosts.findIndex(post => post.timestamp === timestamp);
        if (postIndex !== -1) {
            forumPosts[postIndex].answer = answer; // Update the answer
        }

        // Save the updated posts back to the file
        fs.writeFile('./forumPosts.json', JSON.stringify(forumPosts, null, 2), (err) => {
            if (err) {
                console.log("Error saving answer", err);
                return res.redirect('/forum');
            }
            // Redirect back to the forum page
            res.redirect('/forum');
        });
    });
});

// Sample station data (replace with your actual data or database queries)
const stations = [
    { lat: 13.1441, lng: 77.5953, name: 'Station 1', availability: 'Available', type: 'Fast', price: '₹50/hour', hours: '24/7' },
    { lat: 13.1432, lng: 77.6173, name: 'Station 2', availability: 'Occupied', type: 'Normal', price: '₹30/hour', hours: '6 AM - 10 PM' },
    { lat: 13.1198, lng: 77.6047, name: 'Station 3', availability: 'Available', type: 'Fast', price: '₹60/hour', hours: '9 AM - 9 PM' },
  ];
  
  // Define the route for /map
  app.get('/map', (req, res) => {
    // Pass the stations data to the map.ejs template
    res.render('map', { stations: stations });
  });
  

const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
