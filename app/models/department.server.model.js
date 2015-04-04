/**
 * Created by dhruti on 26-07-2014.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DepartmentSchema=new Schema({
    name: {
        type: String,
        default: '',
        required: 'Please fill Department name',
        trim: true
    },
    Date:{
        type:Date,
        default:Date.now
    },
    _id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

mongoose.model('Department',DepartmentSchema);