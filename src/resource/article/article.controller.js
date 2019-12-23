const Article = require('./article');

exports.createArticle = (req, res) => {
    
    const article = new Article({
        title: req.body.title,
        userId: req.body.userId,
        body: req.body.body
    });
    article.save().then(
        () =>{
           return res.status(201).json({
                status: "success",
                data: {
                    message: 'Article Created Successfully',
                    articleId:article._id,
                    title: article.title
                }
            })
        }
    ).catch((error) =>{
       return res.status(400).json({
            status: error,
            error: "Unable to create new article"
        });
    });
} 

exports.upadteArticle = (req, res) =>{
    const id = req.params.id;
    const Article_modefied = {
        title: req.body.title,
        userId: req.body.userId,
        body: req.body.body
    };
    Article.updateOne({_id: id, Article_modefied}).then(
        () =>{
           return res.status(201).json({
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
           return res.status(400).json({
                status: error,
                error: "Unable to updated article"
            });
        }
    );
}

exports.deleteArticle = (req, res) =>{
    Article.findOneAndDelete({_id: req.params.id}).then(
        () =>{
            return res.status(200).json({
                status: 'Success',
                data: {
                    message: 'Article Deleted Successfully',
                }
            });
        }
    ).catch(
        (error) =>{
           return res.status(400).json({
                status: error,
                error: "Unable to delete article"
            });
        }
    )
}

exports.getArticles = (req, res) =>{
        Article.find().then(
            (Article) =>{
                return res.status(200).json({
                  status: "success",
                  data: Article  
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
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
            return res.status(200).json({
                status: 'Success',
                data: Article
            });
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                status: error,
                error: "Unable to get single article"
            });
        }
    )
}

//route.post('/create', )