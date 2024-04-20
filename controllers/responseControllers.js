const openaiResponse = require('../Model/responseModel.js')

const getResponse = async (req, res) => {
    let { question } = req.body;
    question = 'if the following promp provided below does not relate to a pet/ aniamal return try again \n' + question;
    try {
     const data = await openaiResponse.chatAi(question);
     res.status(200).json(data);
    } catch(error){
        res.status(404).send(error);
    };
};



module.exports = {
    getResponse
};