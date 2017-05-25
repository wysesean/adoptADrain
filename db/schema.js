const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  organization: {type: String},
  stormDrainInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'StormDrain'},
  createdAt: {type: Date, default: Date.now}
})

const stormDrainSchema = new mongoose.Schema({
	name: {type: String},
	lat: {type : Number, required: true},
	long: {type : Number, required: true},
	claimedUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	claimed: {type: Boolean, default: false},
	claimedAt: {type: Date},
	createdAt: {type: Date, default: Date.now}
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  StormDrain: mongoose.model('StormDrain', stormDrainSchema)
}
