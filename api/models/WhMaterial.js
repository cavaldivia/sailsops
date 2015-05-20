/**
* WhMaterial.js
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
    prods: {
        collection: 'WhProd',
        via: 'material'
    },
    shotage: {
  		type: 'integer',
  		defaultsTo: 0
  	},
    active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

