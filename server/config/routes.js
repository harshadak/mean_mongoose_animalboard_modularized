var animals = require('../controllers/animals.js');

module.exports = function(app) {
    // Routes

    // Root Request
    // Route to display all the animals
    app.get('/', function(req, res) {
        animals.showAll(req, res);
    });

    // Route to display the form for adding a new animal
    app.get('/animals/new', function(req, res) {
        res.render('animal_form');
    });

    // Add Animal Request 
    app.post('/animals', function(req, res) {
        animals.newAnimal(req, res);
    });

    // GET with id - one fish info
    app.get('/animals/:id', function(req, res) {
        animals.showOneAnimal(req, res);
    });

    // NEED TO WORK ON THIS
    // Route to display form for editing an animal
    app.get('/animals/edit/:id', function(req, res) {
        animals.editAnimal(req, res);
    });

    app.post('/animals/edit/:id', function(req, res) {
        animals.saveEditAnimal(req, res);
    });

    // Deleting an animal
    app.post('/animals/destroy/:id', function(req, res) {
        animals.deleteAnimal(req, res);
    });
}