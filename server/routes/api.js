const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/contact');

const db = "mongodb://username:password@ds115214.mlab.com:15214/getitdone";
mongoose.Promise = global.Promise;
// mongoose.connect(db,
//     {useNewUrlParser : true},
//     function(err){
//     if(err){
//         console.error("Error! "+err);
//     }
// })

// router.get('/contacts', function(req, res){
//     console.log('Get request for all contacts');
//     Contact.find({})
//     .exec(function(err, contacts){
//         if(err){
//             console.log("Error retrieving contacts");
//         }else {
//             res.json(contacts);
//         }
//     });
// });

/*router.get('/contacts/:id', function(req, res){
    console.log('Get request for single contact');
    Contact.findById(req.params.id)
    .exec(function(err, contact){
        if(err){
            console.log("Error retrieving contact");
        }else {
            res.json(contact);
        }
    });
});
*/
// router.post('/contact', function(req, res){
//     console.log('Post a contact');
//     var newContact = new Contact();
//     newContact.name = req.body.name;
//     newContact.email = req.body.email;    
//     newContact.phone = req.body.phone;    
//     newContact.sub = req.body.sub;    
//     newContact.msg = req.body.msg;    
//     newContact.save(function(err, insertedContact){
//         if(err){
//             console.log("Error inserting contact");
//         }else {
//             res.json(insertedContact);
//         }
//     });
// });

module.exports = router;
