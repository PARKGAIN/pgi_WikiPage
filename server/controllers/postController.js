const Post = require('../models/postModel');

module.exports.loadPostList = async (req, res) => {
    try{
       const posts= await Post.find().select('title');
       res.send(posts)
    } catch(err) {
        console.log(err);
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.savePost = async (req,res) => {
    try {
        await Post.create({
            title: req.body.title,
            content: req.body.content,
        });
        console.log(content);
        res.status(200).send('ok');
    } catch(err) {
        console.log(err)
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.updatePost = async (req,res) => {
    try{
        const postId = req.params.id;
        const updatedPost = {
            title: req.body.title,
            content: req.body.content,
        };
        await Post.findByIdAndUpdate(postId, updatedPost,{new: true});
        res.status(200).send('ok');
    } catch(err) {
        console.log(err)
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.loadPost = async (req,res) => {
    try {
        const post=  await Post.findById(req.params.id).select('title content');
        res.send(post)
    }catch(err){
        console.log(err)
        res.status(500).send('서버 에러 발생');
    }
}