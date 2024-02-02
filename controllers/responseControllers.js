const openaiResponse = require('../Model/responseModel')

const getResponse = async(req, res) => {
    const { question } = req.body;
    try {
     const data = await openaiResponse.chatAi(question);
     res.status(200).json(data);
    } catch(errro){
        res.status(404).send(error);
    };
};



module.exports = getResponse