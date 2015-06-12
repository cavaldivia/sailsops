/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	first_name: {
  		type: 'string',
  		required: true
  	},
  	last_name: {
  		type: 'string',
  		required: true
  	},
  	rut: {
  		type: 'integer',
  		required: true,
  		unique: true
  	},
  	email: {
  		type: 'email',
  		unique: true,
  		required: true
  	},
    gender: {
        type: 'boolean'
    },
    requests: {
        collection: 'request',
        via: 'requester'
    },
    records: {
      collection: 'cellLineRecord',
      via: 'users'
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	},
    gtran: {
  		type: 'string',
  	},
    region: {
  		type: 'string',
  	},
  }
};

