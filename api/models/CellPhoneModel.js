/**
* CellPhoneModel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		unique: true,
  		required: true
  	},
  	brand: {
  		model: 'cellPhoneBrand'
  	},
  	can_call: {
  		type: 'boolean',
  		defaultsTo: false
  	},
  	can_dataplan: {
  		type: 'boolean',
  		defaultsTo: false
  	},
  	phones: {
  		collection: 'cellPhone',
  		via: 'phoneModel'
  	},
  	active: {
  		type: 'boolean',
  		default: true
  	}
  }
};

