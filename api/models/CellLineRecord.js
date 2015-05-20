/**
* CellLineRecord.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    requests: {
         model: 'request'
    },
  	line: {
  		model: 'cellLine'
  	},
  	users: {
  		model: 'user'
  	},
    job: {
        type: 'string'
    },
  	positions: {
  		model: 'position'
  	},
  	units: {
  		model: 'unit'
  	},
    sagposition : {
        type: 'string'
    },
    account: {
        model: 'cellAccount'
    },
  	minutes: {
  		type: 'integer',
  		defaultsTo: 0
  	},
  	dataplan: {
  		type: 'integer',
  		defaultsTo: 0
  	},
    docid: {
        type: 'integer',
    },
    obs : {
        type: 'string'
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

