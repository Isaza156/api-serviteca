const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Initializations
const app = express();
require('./db')

//hbs
const exphbs = require('express-handlebars');

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//hbs
app.set('views', path.join(__dirname, 'views'));

// Configuramos rutas a nivel de proyecto
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/reserva'));
app.use('/', require('./routes/servicios'));
app.use('/', require('./routes/signin'));
app.use('/', require('./routes/solicitud'));
// app.use('/api/serviteca', require('./routes/solicitud'));

// Static files
app.use('/public', express.static(path.join(__dirname, './public')));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});