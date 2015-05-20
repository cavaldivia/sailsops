/**
* WhProd.js
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
  	IdMP: {
  		type: 'integer',
  		defaultsTo: 0
  	},
    material: {
        model: 'WhMaterial'
    },
    book: {
        collection: 'WhBook',
        via: 'prods'
    },
    pack: {
        collection: 'WhProdPacking',
        via: 'prod'
    },
    active: {
  		type: 'boolean',
  		defaultsTo: true
  	}    
  }
};

