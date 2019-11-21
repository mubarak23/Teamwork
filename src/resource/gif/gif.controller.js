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