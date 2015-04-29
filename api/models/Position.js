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
  		defaultsTo: true
  	},
  	dataplan: {
  		type: 'integer',
  		defaultsTo:0
  	},
    politic: {
        type: 'boolean',
        defaultsTo: false
    },
    records: {
      collection: 'cellLineRecord',
      via: 'positions'
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

