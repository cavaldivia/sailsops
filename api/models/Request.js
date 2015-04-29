/**
* Request.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      requester : {
          model: 'user'
      },
      type: {
          model: 'requestType'
      },
      startDate: {
          type: 'date'
      },
      endDate: {
          type: 'date'
      },
      records: {
          collection: 'cellLineRecord',
          via: 'requests'
      },
      phones: {
          collection: 'cellPhone',
          via: 'requests'
      },
      status: {
          type: 'integer'
      },
      obs: {
          type: 'string'
      },
      active: {
          type: 'boolean',
          defaultsTo: true
      }
  }
};

