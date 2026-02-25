const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Setup static directory to serve
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Mary Motors – Drive Your Dream',
        activeHome: true
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us – Mary Motors',
        activeAbout: true
    });
});

app.get('/all-cars', (req, res) => {
    res.render('all-cars', {
        title: 'All Cars – Mary Motors',
        activeVehicles: true
    });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', {
        title: 'Showroom Gallery – Mary Motors',
        activeGallery: true
    });
});

app.get('/blogs', (req, res) => {
    res.render('blogs', {
        title: 'Automotive Blog – Mary Motors',
        activeBlogs: true
    });
});

app.get('/contact-us', (req, res) => {
    res.render('contact-us', {
        title: 'Contact Us – Mary Motors',
        activeContact: true
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
