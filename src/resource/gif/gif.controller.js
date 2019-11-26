const Gif = require('./git');
const { getUserId, processGifToUrl } = require('../../config/index');

exports.PostGif = (req, res) =>{
    const { title } = req.body.title;
    const { userId } = getUserId(req);
    const { uri } = processGifToUrl(req);
    const postGif = new Gif({
        title,
        imageUrl: uri,
        userId,
    });
    postGif.save().then(
        (gif) => {
            const gifData = {
                message:'GIF image Created Successful',
                gifId: gif._id,
                title: gif.title,
                imageUrl: gif.imageUrl,
                userId: gif.userId,
                createOn: gif.createOn
            }

            return res.status(201).json({
                status: 'success',
                data: gifData
            });
        }
    ).catch(
        (err) => {
            return res.status(401).json({
                status: 'error',
                err
            }); 
        }
    );
}

exports.deleteGif = (req, res) =>{
    Gif.findOneAndDelete({_id: req.params.id}).then(
        () => {
           return res.status(200).json({
                status: "success",
                data: {
                    message: 'Gif deleted successfully'
                }
            }).catch(
                (error) => {
                  return res.status(401).json({
                        status: error,
                        error: "Unable to delete gif", 
                    })
                }
            )
        }
    )
}

exports.viewGif = (req, res) =>{
        Gif.findById({_id: req.params.id}).then(
            (gif) => {
               return res.status(200).json({
                    status: "success",
                    data: gif
                })
            }
        ).catch(
            (error) => {
               return res.status(400).json({
                    status: error,
                    error: "Unable to get single gif"
                })
            }
        )
}


exports.gifFeed = (req, res) => {
    Gif.find().then(
        (data) =>{
            return res.status(200).json({
                status: "success",
                data
            })            
        }
    ).catch(
        (error) => {
            return res.status(401).json({
                status: error,
                error: "Unable to get gif feed"
            })
        }
    )
}