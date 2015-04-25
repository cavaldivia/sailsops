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
      state : {
          enum: ['Requerimiento Recibido','Solicitado a Entel','Recibo de Entel','Entregado/Enviado a Usuario/a','Completado','Rechazado']
      },
      records: {
          collection: 'cellLineRecord',
          via: 'requests'
      },
      phones: {
          collection: 'cellPhone',
          via: 'requests'
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

