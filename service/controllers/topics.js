var mongoose = require('mongoose'),
    uuid = require('node-uuid'),
    Topic = mongoose.model('topic'),
    Document = mongoose.model('document');

function getTopics(req, res){
    Topic.find({})
        .select({ name: 1, icon: 1})
        .lean()
        .exec(function(err, topics){
            if (err){
                return res.status(500).send({error: err});
            }

            res.send(topics);
        });
}

function postTopic(req, res){
    var topic;

    if (req.body._id){
    } else {
        topic = new Topic({
            name: req.body.name,
            icon: req.body.icon || null,
            _id: uuid.v4()
        });

        topic.save(function(err, topic){
            if (err){
                return res.status(500).send({ error: err });
            }

            res.send({ topic: topic });
        });
    }
}

function getDocumentsByTopic(req, res){
    var topicId = req.params.id;

    if (!topicId){
        return res.status(400).send({error: 'Invalid topic id'});
    }

    Document.find({topicId : topicId})
        .select({ name: 1, link: 1, _id: 0 })
        .lean()
        .exec(function(err, documents){
            if (err){
                return res.status(500).send({error: err});
            }

            res.send(documents);
        });
}

module.exports = {
    getTopics: getTopics,
    postTopic: postTopic,
    getDocumentsByTopic: getDocumentsByTopic
};
