/**
 * Created by dhruti on 26-07-2014.
 */


var mongoose = require('mongoose'),
    Department = mongoose.model('Department'),
    _ = require('lodash');

exports.index = function(req, res) {
    res.render('department')
};

exports.create = function(req, res) {
    var department = new Department(req.body);
    //department.user = req.user;

    department.save(function(err) {
        res.jsonp(department);
    });
};

exports.read = function(req, res) {
    res.jsonp(req.department);
};


exports.update = function(req, res) {
    var department = req.department ;
    department = _.extend(department , req.body);
    department.save(function(err) {
             res.jsonp(department);
    });
};

/**
 * Delete an Employee
 */
exports.delete = function(req, res) {
    var department = req.department ;

    department.remove(function(err) {
             res.jsonp(department);

           });
};

/**
 * List of Employees
 */
exports.list = function(req, res) { Department.find().exec(function(err, department) {
        res.jsonp(department);

});
};


exports.departmentById = function(req, res, next, id) { Department.findById(id).exec(function(err, employee) {
    req.department = department ;
    next();
});
};

