const express = require('express');
const router = express.Router();

const bucketlist = require('./../model/list');

//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
	res.send("GET");
});

//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
	res.send("POST");

});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	res.send("DELETE");

})

module.exports = router;