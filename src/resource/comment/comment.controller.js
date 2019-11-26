const Cooment = require('./comment');
const { getUserId }  = require('../../config/index');
exports.createComment = (req, res) => {
    console.log(req.body);
    const token = req.headers.authorization.split(' ')[1];
    const userId = getUserId(token);
    const comment = new Cooment({
        articleId: req.params.articleId,
        userId,
        articleTitle: req.body.title,
        comment: req.body.comment
    });
    comment.save().then(
        (comment) =>{
            res.status(201).json({
                status: "success",
                data: {
                    message: 'Commnet Created Successfully',
                    commentId:comment._id,
                    articleId: comment.articleId,
                    comment: comment.comment
                }
            })
        }
    ).catch((error) =>{
        res.status(400).json({
            status: error,
            error: "Unable to add comment"
        });
    });
} 
