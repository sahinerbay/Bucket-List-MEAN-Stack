const express = require('express');
const router = express.Router();

const Bucketlist = require('./../model/list');

//GET HTTP method to /bucketlist
router.get('/', (req, res, next) => {
	Bucketlist.find({})
		.then((list) => {
			res.send({
				success: true,
				list
			})
		})
		.catch(next)
});

//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
	let list_props = req.body;

	Bucketlist.create(list_props)
		.then(list => {
			res.json({ success: true, message: "Added successfully." })
		})
		.catch(next)

});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
	let list_id = req.params.id;
	
	Bucketlist.findByIdAndRemove(list_id)
		.then(() => res.json({ success: true, message: "Deleted successfully" }))
		.catch(next);
})

module.exports = router;