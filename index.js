const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();
require('./db')

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors()); 
app.use(express.json());

// routes
app.use('/api/serviteca', require('./routes/solicitud'));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});