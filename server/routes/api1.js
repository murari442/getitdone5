const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Booking = require('../models/booking');

const db = "mongodb://username:password@ds115214.mlab.com:15214/getitdone";
mongoose.Promise = global.Promise;
mongoose.connect(db,
    function(err){
    if(err){
        console.error("Error! "+err);
    }
})
/*router.get('/', function(req, res){
    res.send('api1 is working!');
});
*/
/*
router.get('/bookings', function(req, res){
    console.log('Get request for all bookings');
    Booking.find({})
    .exec(function(err, bookings){
        if(err){
            console.log("Error retrieving bookings");
        }else {
            res.json(bookings);
        }
    });
});

router.get('/bookings/:id', function(req, res){
    console.log('Get request for single booking');
    Booking.findById(req.params.id)
    .exec(function(err, booking){
        if(err){
            console.log("Error retrieving booking");
        }else {
            res.json(booking);
        }
    });
});
*/
// router.post('/booking', function(req, res){
//     console.log('Post a booking');
//     var newBooking = new Booking();
//     newBooking.name = req.body.name;
//     newBooking.email = req.body.email;    
//     newBooking.phone = req.body.phone;    
//     newBooking.add = req.body.add;    
//     newBooking.work = req.body.work;    
//     newBooking.save(function(err, insertedBooking){
//         if(err){
//             console.log("Error inserting booking");
//         }else {
//             res.json(insertedBooking);
//         }
//     });
// });

module.exports = router;
