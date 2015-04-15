/**
* CellPhone.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	IMEI: {
  		type: 'string',
  		unique: true,
  		required: true
  	},
  	phoneModel: {
  		model: 'cellPhoneModel'
  	},
  	ocNumber: {
  		type: 'string'
  	},
  	invoiceNumber: {
  		type: 'integer'
  	},
  	phoneLine: {
  		model: 'cellLine'
  	},
  	simcardLine: {
  		model: 'cellLine'
  	},
  	active: {
  		type: 'boolean',
  		default: true
  	}
  }
};

