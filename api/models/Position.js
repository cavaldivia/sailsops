/**
* Position.js
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
  	minutes: {
  		type: 'integer',
  		default: true
  	},
  	dataplan: {
  		type: 'integer',
  		default:0
  	},
  	lines: {
  		collection: 'cellLine',
  		via: 'positions'
  	},
    records: {
      collection: 'cellLineRecord',
      via: 'positions'
    },
  	active: {
  		type: 'boolean',
  		default: true
  	}
  }
};

