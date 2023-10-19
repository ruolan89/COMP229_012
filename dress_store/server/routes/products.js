var express = require('express');
var router = express.Router();
var controller = require('./../controllers/products.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.name){
    controller.productByName(req, res, next, req.query.name);
    return;
  }
  controller.list(req, res);
});

router.post('/', controller.create);

router.delete('/', controller.remove);

router.get('/:id', controller.productByID);

router.put('/:id', controller.update);

router.delete('/:id', controller.removById);

module.exports = router;
