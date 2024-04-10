const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const cars = require('./cars.json');


app.get('/cars',(req,res)=>{




res.json(cars);
});