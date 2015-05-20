/**
* WhProdPacking.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      prod: {
          model: 'WhProd'
      },
  	name: {
  		type: 'string',
  		required: true
  	},
    unitperpack: {
  		type: 'integer',
  		defaultsTo: 0
    },
    codebar: {
  		type: 'integer',
  		defaultsTo: 0,
        unique: true
    },
    active: {
  		type: 'boolean',
  		defaultsTo: true
  	}   
  }
};

