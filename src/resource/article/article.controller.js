const article = require('article');

exports.createArticle = (req, res, next) => {
    const Thing = new thing({
        title: req.body.title,
        body: req.body.body
    });
    article.save().then(
        () =>{
            res.status(201).json({
                status: "success",
                data: {
                    message: 'Article Created Successfully',
                    articleId:article._id,
                    createOn: article.create_at.toISOString(),
                    title: article.title
                }
            })
        }
    ).catch((error) =>{
        res.status(400).json({
            status: error,
            error: "Unable to create new article"
        });
    });
} 

