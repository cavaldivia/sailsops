/**
* WhBook.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    date: {
          type: 'date'
    },
    whreq: {
        model: 'WhRequest'
    },
    oc_n: {
        type: 'string'
    },
    prods: {
        model: 'WhProd'
    },
    prodin: {
        type: 'integer',
        defaultsTo: 0
    },
    prodout: {
        type: 'integer',
        defaultsTo: 0
    },
    unitprice: {
        type: 'integer',
        defaultsTo: 0
    },
    debit: {
        type: 'integer',
        defaultsTo: 0
    },    
    credit: {
        type: 'integer',
        defaultsTo: 0
    },    
    active: {
        type: 'boolean',
        defaultsTo: true
    }
  }
};

