/**
 * Created by dhruti on 26-07-2014.
 */

module.exports = function(app) {
       var department = require('../../app/controllers/department');

    app.route('/department').get(department.index)

};