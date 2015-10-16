let express = require('express');
let exphbs = require('express-handlebars');
let app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 4000);

// Middleware
app.use('/assets', express.static('dist'));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/explore', (req, res) => res.render('explore'));
app.get('/create', (req, res) => res.render('create'));
app.get('/event/:id', (req, res) => res.render('event'));
app.get('/upload', (req, res) => res.render('upload'));
app.get('/sign-in', (req, res) => res.render('sign-in'));

// Error handling

// Start server
app.listen(app.get('port'),
    () => console.log('Server started at port ' + app.get('port') + '.')
);
