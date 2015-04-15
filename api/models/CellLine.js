/**
* CellLine.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	number: {
  		type: 'integer',
  		required: true,
  		unique: true
  	},
  	users: {
  		model: 'user'
  	},
  	positions: {
  		model: 'position'
  	},
  	units: {
  		model: 'unit'
  	},
  	phone: {
  		collecion: 'cellPhone',
  		via: 'phoneLine'
  	},
  	simcard: {
  		collection: 'cellPhone',
  		via: 'simcardLine'
  	},
  	minutes: {
  		type: 'integer',
  		default: 0
  	},
  	dataplan: {
  		type: 'integer',
  		default: 0
  	},
  	records: {
  		collection: 'cellLineRecord',
  		via: 'line'
  	},
  	active: {
  		type: 'boolean',
  		default: true
  	}
  }
};

