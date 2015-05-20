/**
* WhRequest.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    date: {
          type: 'date'
    },
    offices: {
        model: 'Office'
    },
    whreqs: {
        collection: 'WhBook',
        via: 'whreq'
    },
    active: {
          type: 'boolean',
          defaultsTo: true
    }    
  }
};

