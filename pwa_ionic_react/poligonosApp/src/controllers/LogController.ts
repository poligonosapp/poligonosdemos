// import PoligonoDAO from "../databases/PoligonoDAO";

let debug = require('debug')('poligono');

const connection = require('./databases/getting-started.ts');

// Display Author update form on GET
exports.poligono_update_get = function(req, res, next) {

    req.sanitize('id').escape().trim();
    connection.db.findById(req.params.id, function(err, poligono) {
        if (err) {
            debug('update error:' + err);
            return next(err);
        }
        //On success
        res.render('poligono_form', { title: 'Update Poligono', poligono: poligono });
    });

};
