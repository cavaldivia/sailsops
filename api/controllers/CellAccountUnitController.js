/**
 * CellAccountUnitsController
 *
 * @description :: Server-side logic for managing cellaccountunits
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	units: {
        model: 'Units'
    },
    account: {
        model: 'CellAccount'
    },
    active: {
        type: 'boolean',
        defaultsTo: true
    }
};

