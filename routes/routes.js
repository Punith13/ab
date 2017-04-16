const controller = require('../controllers/controller');

module.exports = (app) => {
    
    app.get('/getSampleData' , controller.getSampleData );
    
}