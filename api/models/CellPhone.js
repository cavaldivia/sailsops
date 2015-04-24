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
  		required: true
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

  	ocNumber: {
  		type: 'string'
  	},
  	invoiceNumber: {
  		type: 'integer'
  	},
  	phoneLine: {
  		collection: 'cellLinePhone',
        via: 'phone'
  	},
    disposalDocument: {
        type: 'string'
    },
    status: {
       type: 'string' ,
       enum: ['activo', 'baja con enajenacion', 'baja sin enajenacion']
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

