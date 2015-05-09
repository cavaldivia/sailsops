/**
* CellPhoneRecord.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    phone : {
        model: 'CellPhone'
    },
    docid: {
        type: 'integer',
    },
    status : {
        type: 'string'
    },
    active : {
        type: 'boolean',
        defaultsTo: true
    }
  }
};

