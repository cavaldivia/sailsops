/**
* ProdEstr.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    units : {
        model: 'unit'
    },
    programs: {
        model: 'program'
    },
    subprods: {
        model: 'SubProd'
    },
    linerecords: {
        collection: 'CelllineRecord',
        via: 'prodsestrs'
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}     
  }
};

