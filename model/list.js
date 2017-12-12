const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BucketListSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: String,
	category: {
		type: String,
		required: true,
		enum: ['High', 'Medium', 'Low']
	}
});

const BucketList = mongoose.model('bucketlist', BucketListSchema);

module.exports = BucketList;