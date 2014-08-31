var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uuid = require('node-uuid');

var TopicSchema = new Schema({
    _id: { type: String, index: true },
    name: { type: String, index: true, required: true },
    icon: String
});

mongoose.model('topic', TopicSchema);
