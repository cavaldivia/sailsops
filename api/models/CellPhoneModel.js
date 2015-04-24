/**
* CellPhoneModel.js
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
  	brand: {
  		model: 'cellPhoneBrand'
  	},
  	can_call: {
  		type: 'boolean',
  		defaultsTo: false
  	},
  	can_dataplan: {
  		type: 'boolean',
  		defaultsTo: false
  	},
    phonetype: {
        type: 'string',
        enum: ['costo cero', 'BAM', 'NetBook','Ip','Android','Simcard']
    },
  	phones: {
  		collection: 'cellPhone',
  		via: 'phoneModel'
  	},
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

