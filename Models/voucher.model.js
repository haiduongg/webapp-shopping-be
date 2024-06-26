const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoucherSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		code: {
			type: String,
			required: true,
		},
		discountAmount: {
			type: Number,
			required: true,
		},
		expiryDate: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Voucher', VoucherSchema);
