const express = require('express');
const router = express.Router();

const Post = require('../models/Post');


// Viser alle posts
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);

    } catch(err) {
        res.json({message:err})

    }


});

router.get('/specific', (req,res) => {
    res.send('We are on specific Posts');
    
    });


// Tilføjer til databasen
router.post('/', async (req,res) => {
const post = new Post({
    title: req.body.title,
    description: req.body.description
});
const savedPost = await post.save()
try {
res.json(savedPost);
} catch (err) {
    res.json({message: err});

}
});

// Find Udvalgt post

router.get('/:postId', async (req, res) => {
    try{
const post = await Post.findById(req.params.postId);
res.json(post);

}catch(err){
    res.json({message:err})

}
});

//Delete en post
router.delete('/:postId', async (req, res) => {
    try{
const deletedPost = await Post.deleteOne({_id: req.params.postId});

}catch(err){
    res.json({message:err})

}
});


//Opdater en post
router.patch('/:postId', async (req, res) => {
    try{
const updatedPost = await Post.updateOne({_id: req.params.postId},{ $set: {title: req.body.title}}
    
    );

    res.json(updatedPost);

}catch(err){
    res.json({message:err})

}
});



module.exports = router;
