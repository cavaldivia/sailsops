/**
* CellLineRecord.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	line: {
  		model: 'cellLine'
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
  	minutes: {
  		type: 'integer',
  		default: 0
  	},
  	dataplan: {
  		type: 'integer',
  		default: 0
  	},
  	active: {
  		type: 'boolean',
  		default: true
  	}
  }
};

