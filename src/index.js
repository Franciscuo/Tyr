const express = require('express');
const morgan = require('morgan')
const path = require('path');

const compression = require('compression');

//Initialization 
const app = express();
app.use(compression());
app.use(morgan('dev'));

//Settings
app.set('AppName', 'Tyr');
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//Static
app.use(express.static(path.join(__dirname, 'public')));

//404
app.get('*', (req, res) => {
    res.status(404).send('Error 404')
})

//Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})