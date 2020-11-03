const router = require('express').Router();

const { getAllCars, createCar } = require('./controllers/carController')

router.get('/get-cars', getAllCars);



router.post('/add-car', createCar);

module.exports = router;