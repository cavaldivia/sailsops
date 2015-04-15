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
  		default: 0
  	},
  	idSIGFE: {
  		type: 'integer',
  		default: 0
  	},
    account: {
      collection: 'cellAccount',
      via: 'units'
    },
  	lines: {
  		collection: 'cellLine',
  		via: 'units'
  	},
    records: {
      collection: 'cellLineRecord',
      via: 'units'
    },
  	active: {
  		type: 'boolean',
  		default: true
  	}
  }
};

