const Posts = require('../models/postModel');

module.exports.loadPostList = async (req, res) => {
    try{
        const pageNumber = req.query.pageNumber || 1; 
        const pageSize = req.query.pageSize || 5; 
        const totalCount = await Posts.countDocuments(); 
        const posts= await Posts.find()
        .select('title postId content')
        .sort({createdAt:-1})
        .skip((pageNumber - 1) * pageSize) 
        .limit(pageSize); 

        const result = {
            posts,
            totalCount,
            pageSize,
            pageNumber
          };

        res.send(result.posts);
    } catch(err) {
        console.log(err);
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.savePost = async (req,res) => {
    try {
        const post = await Posts.create({
            title: req.body.title,
            content: req.body.content,
        });
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
        await Posts.findOneAndUpdate({postId: postId}, updatedPost,{new: true});
        res.status(200).send('ok');
    } catch(err) {
        console.log(err)
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.loadPost = async (req,res) => {
    try {
        const postId = parseInt(req.params.id);
        const post=  await Posts.find({postId:postId}).select('title content');
        res.send(post);
    }catch(err){
        console.log(err)
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.loadOtherPost = async (req,res) => {
    try {
        const postId = parseInt(req.params.id);
        const otherPosts = await Posts.find({ postId: { $nin: [postId] } });
        res.status(200).json(otherPosts);
    }catch(err){
        console.log(err);
        res.status(500).send('서버 에러 발생');
    }
}

module.exports.loadTitles = async (req, res) => {
    try {
        const titles =await Posts.find({},{title: 1,_id:0});
        const titleArr= titles.map((i)=>(i.title))
        res.send(titleArr);
    }catch(err){
        console.log(err);
        res.status(500).send('서버 에러 발생');
    }
}