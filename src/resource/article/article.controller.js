const Article = require('./article');

exports.createArticle = (req, res) => {
    const Article = new Article({
        title: req.body.title,
        body: req.body.body
    });
    Article.save().then(
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

exports.upadteArticle = (req, res) =>{
    const id = req.params.id;
    const Article_modefied = {
        title: req.body.title,
        body: req.body.body
    };
    Article.updateOne({_id: id, Article_modefied}).then(
        () =>{
            res.status(201).json({
                status: "success",
                data: {
                    message: "Article Upated Successfully",
                    title: Article.title,
                    body: article.body
                }
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                status: error,
                error: "Unable to updated article"
            });
        }
    );
}

exports.deleteArticle = (req, res) =>{
    Article.findOneAndDelete({_id: req.params.id}).then(
        () =>{
            res.status(200).json({
                status: 'Success',
                data: {
                    message: 'Article Deleted Successfully',
                }
            });
        }
    ).catch(
        (error) =>{
            res.status(400).json({
                status: error,
                error: "Unable to delete article"
            });
        }
    )
}

exports.getArticles = (req, res) =>{
        Article.find().then(
            (Article) =>{
                res.status(200).json({
                  status: "success",
                  data: Article  
                })
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    status: error,
                    error: "Unable to fetch lists of articles"
                });
            }
        )
}

exports.getOneArticle = (req, res) =>{
    const id = req.params.id;
    Article.findById({_id: id}).then(
        (Article) =>{
            res.status(200).json({
                status: 'Success',
                data: Article
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                status: error,
                error: "Unable to single article"
            });
        }
    )
}