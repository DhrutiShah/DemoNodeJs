/**
 * Created by dhruti on 26-07-2014.
 */


module.exports = function(app) {
    var deptEmployee = require('../../app/controllers/deptEmployee');

    app.route('/deptEmployee').get(deptEmployee.index)

};