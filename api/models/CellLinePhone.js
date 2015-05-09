/**
* CellLinePhone.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    line: {
        model: 'CellLine'
    },
    phone: {
        model: 'CellPhone'
    },
    active: {
        type: 'boolean',
        defaultsTo: true
    }
  }
};

