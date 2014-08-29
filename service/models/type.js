var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uuid = require('node-uuid');

var TypeSchema = new Schema({
    _id: { type: String, index: true, default: uuid.v1() },
    typeId: { type: String, index: true, required: true }
});

mongoose.model('types', TypeSchema);
