const Post = require('../models/postModel');

module.exports.loadPostList = async (req, res) => {
    try{
        const pageNumber = req.query.pageNumber || 1; 
        const pageSize = req.query.pageSize || 5; 
        const totalCount = await Post.countDocuments(); 
        const posts= await Post.find()
        .select('title')
        .skip((pageNumber - 1) * pageSize) 
        .limit(pageSize); 

        const result = {
            posts,
            totalCount,
            pageSize,
            pageNumber
          };

        res.send(result);
    } catch(err) {
        console.log(err);
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.savePost = async (req,res) => {
    try {
        const regex = /(\[\[([^\]]+)\]\])/g;
        const matches = post.content.match(regex);
        if (matches) {
          for (let i = 0; i < matches.length; i++) {
            const title = matches[i].replace(/[\[\]]/g, '');
            const linkedPost = await Post.findOne({ title });
            if (linkedPost) {
              post.content = post.content.replace(matches[i], `[[${linkedPost._id}]]`);
            }
          }
        }
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
        });
        console.log(post);
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