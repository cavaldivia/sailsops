/**
* CellLine.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	number: {
  		type: 'integer',
  		required: true,
  		unique: true
  	},
  	records: {
  		collection: 'cellLineRecord',
  		via: 'line'
  	},
    phones: {
        collection: 'CellLinePhone',
        via: 'line'
    },
  	active: {
  		type: 'boolean',
  		defaultsTo: true
  	}
  }
};

