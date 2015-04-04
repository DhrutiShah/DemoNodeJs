/**
 * Created by dhruti on 26-07-2014.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeptEmployeeSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: 'Please fill Employee name',
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    department_id: {
        type: Schema.ObjectId,
        ref: 'Department'
    }
});

mongoose.model('DeptEmployee', DeptEmployeeSchema);
