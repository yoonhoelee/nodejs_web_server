const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// middleware to handle form data(applied on all routes)
app.use(express.urlencoded({extended:false}));
// middleware to handle json(applied on all routes)
app.use(express.json());
// middleware to handle static files(applied on all routes)
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname});
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/new-page.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});
app.get('/old-page.html', (req, res) => {
    res.redirect(path.join(__dirname, 'views', 'new-page.html'));
});
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
