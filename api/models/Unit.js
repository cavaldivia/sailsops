/**
* Unit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
  	idMP: {
  		type: 'integer',
  		defaultsTo: 0
  	},
  	idSIGFE: {
  		type: 'integer',
  		defaultsTo: 0
  	},
    offices : {
        collection: 'Office',
        via: 'units'
    },
    records: {
      collection: 'cellLineRecord',
      via: 'units'
    },
    prodestrs: {
      collection: 'ProdEstr',
      via: 'units'
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

