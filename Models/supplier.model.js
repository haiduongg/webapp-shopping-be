const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Supplier = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contactInfor: {
            type: String,
        },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Supplier', Supplier);
