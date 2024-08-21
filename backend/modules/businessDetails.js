const mongoose = require('mongoose');

const businessDetailsSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      middlename: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      emailid: {
        type: String,
        required: true,
        unique: true,
      },
      businessname: {
        type: String,
        required: true,
      },
      businessaddress: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      businessDescription: {
        type: String,
        required: true,
      },
      businessNumber: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    });

const BusinessDetails = mongoose.model('BusinessDetails', businessDetailsSchema);

module.exports = BusinessDetails;
