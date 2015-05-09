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
  	},
  	phoneModel: {
        model: 'CellPhoneModel'
  	},
    requests: {
        model: 'request'
    },
    startDate: {
        type: 'date'
    },
    endDate: {
        type: 'date'
    },
    cost: {
       type: 'integer',
       defaultsTo: 0
    },
  	ocNumber: {
  		type: 'string'
  	},
  	invoiceNumber: {
  		type: 'integer'
  	},
  	phoneLine: {
  		collection: 'CellLinePhone',
        via: 'phone'
  	},
    record: {
        collection: 'CellPhoneRecord',
        via: 'phone'
    },
    docid: {
        type: 'integer',
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

