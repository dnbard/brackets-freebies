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

            res.send(topic);
        });
    }
}

function getDocumentsByTopic(req, res){
    var topicId = req.params.id;

    if (!topicId){
        return res.status(400).send({error: 'Invalid topic id'});
    }

    Document.find({topicId : topicId})
        .lean()
        .exec(function(err, documents){
            if (err){
                return res.status(500).send({error: err});
            }

            res.send(documents);
        });
}

function postDocumentInTopic(req, res){
    var topicId = req.params.id;

    if (!topicId){
        return res.status(400).send({error: 'Invalid topic id'});
    } else if (!req.body.link){
        return res.status(400).send({error: 'Invalid document link'});
    } else if (!req.body.name){
        return res.status(400).send({error: 'Invalid document name'});
    }

    var document = new Document({
        _id: uuid.v4(),
        link: req.body.link,
        name: req.body.name,
        icon: req.body.icon || null,
        description: req.body.description || null,
        tags: req.body.tags || null,
        topicId: topicId,
        isApproved: true,
        timestamp: new Date()
    });

    document.save(function(err, document){
        if (err){
            return res.status(500).send({ error: err });
        }

        res.send(document);
    });
}

module.exports = {
    getTopics: getTopics,
    postTopic: postTopic,
    getDocumentsByTopic: getDocumentsByTopic,
    postDocumentInTopic: postDocumentInTopic
};
