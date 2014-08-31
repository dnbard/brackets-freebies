var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uuid = require('node-uuid');

var DocumentSchema = new Schema({
    _id: { type: String, index: true, default: uuid.v4() },
    link: { type: String, required: true },
    topicId: { type: String, index: true, required: true }
});

mongoose.model('document', DocumentSchema);
