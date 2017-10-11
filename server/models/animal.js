var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
    animal: {type: String, required: true, minlength: 3},
    name: {type: String, required: true, maxlength: 20 },
    age: {type: Number, required: true, min: 1, max: 150}
}, {timestamps: true})

mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'Animal'