const { generatePost } = require('../services/postService');
const { generateImage } = require('../services/imageService');

async function getPost(req, res, next) {
  try {
    const { statement, explanation } = await generatePost();
    const imageName = await generateImage(statement, explanation);
    res.json({
      statement,
      explanation,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${imageName}`,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { getPost };