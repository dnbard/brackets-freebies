var mongoose = require('mongoose'),
    uuid = require('node-uuid'),
    Topic = mongoose.model('topic');

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
                return res.status(500).send({
                    error: err,
                    body: req.body
                });
            }

            res.send({
                topic: topic,
                body: res.body
            });
        });
    }
}

module.exports = {
    getTopics: getTopics,
    postTopic: postTopic
};
