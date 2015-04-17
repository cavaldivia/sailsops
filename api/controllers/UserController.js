/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
require('../services/utils')
module.exports = {
        create: function (req, res, next) {
            
            var params = req.params.all();
            //Verifica el digito verificador
            params.rut = utils.verifyRut(params.rut);
            
            if (params.rut ==='') {
                //ejecuta error en caso de no coincidir los valores
                res.status(500);
                err='Digito verificador incorrecto'
                return next(err);
            }
            
            else {
            
            User.create(params, function(err, user) {

                    if (err) return next(err);
                    
                    res.status(201);
                    
                    res.json(user);
                    
                });
            };
        },
        
        
        
        find: function (req, res, next) {
                
            function isShortcut(id) {
                if (id === 'find'   ||  id === 'update' ||  id === 'create' ||  id === 'destroy') {
                    return true;
                    
                }
            };
            
            var id = req.param('id');
            
            var idShortCut = isShortcut(id);
            console.log("idShortCut es ",  idShortCut)
            if (idShortCut === true) {
                console.log("entra al idShortCut ")
                return next();
            }
            
            if (id) {
                User.findOne(id, function(err, user) {
                    if (user===undefined) return res.notFound();
                    
                    if (err) return next(err);
                    
                    res.json(user);
                    
                });
                
            } else {
                var where = req.param('where');
                
                if (_.isString(where)) {
                    where = JSON.parse(where);
                }
                
                var options = {
                    limit: req.param('limit') || undefined,
                    skip: req.param('skip') || undefined,
                    sort: req.param('sort') || undefined,
                    where: where || undefined
                };
                
                //console.log("This is the options", options);
                
                User.find(where, function(err, user) {
                    console.log("This is the options", where);
                    console.log("entra al buscador ..", user)
                    if(user === undefined) return res.notFound();
                    
                    if (err) return next(err);
                    
                    res.json(user);
                    
                });
                
            };
                

        }
};

