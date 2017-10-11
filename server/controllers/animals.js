var mongoose = require('mongoose');
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'Animal'

module.exports = {
    showAll: function(req, res) {
        Animal.find({}, function(err, animals) {
            if(err) {
                console.log("Something went wrong");
            } else {
                console.log("All the animals: ", animals);
                res.render('index', {animalBank: animals});
            }  
        })
    },

    newAnimal: function(req, res) {
        console.log("POST DATA", req.body);
        // create a new User with the name and age corresponding to those from req.body
        var animal = new Animal({animal: req.body.animal, name: req.body.name, age: req.body.age});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        animal.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
                res.render('animal_form', {errors: err.errors});
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added an animal!');
                res.redirect('/');
            }
        })
    },

    showOneAnimal: function(req, res) {
        console.log("animal id-----"+"ObjectId('"+req.params.id+"')")
        Animal.findOne({_id:req.params.id}, function(err, animals) {
            if(err) {
                console.log("Something went wrong");
                res.render('showAnimal');
            } else {
                console.log("got data", animals);
                res.render('showAnimal', {animalBank: animals});
            }
        })
    },

    editAnimal: function(req, res) {
        console.log("!!!!!!!!!!!!!!!!!!!!", req.params.id);
        Animal.findOne({_id: req.params.id}, function(err, animals) {
            if(err) {
                console.log('something went wrong', err);
                res.render('index');
            } else {
                console.log("successfully edited", animals);
                res.render('animal_form', {animalBank: animals});
            }
        })
    },

    saveEditAnimal: function(req, res) {
        console.log("**###############*******", req.body);
        Animal.update({_id: req.params.id}, req.body, function(err, animals) {
            if(err) {
                console.log('something went wrong', err);
                res.render('index', {errors: animals.errors});
            } else {
                console.log("successfully edited animal", animals);
                res.redirect('/');
            }
        })
    },

    deleteAnimal: function(req, res) {
        console.log("*********", req.params.id);
        Animal.remove({_id: req.params.id}, function(err, result) {
            if(err) {
                console.log('something went wrong', err);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted an animal!', Animal.id);
                res.redirect('/');
            }
        })
    }
}