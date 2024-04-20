const OpenAI = require("openai");
require('dotenv').config();

const apiKey = process.env.API_KEY;

const openai = new OpenAI({ apiKey });

 async function chatAi(prompt){
    const completion = await openai.chat.completions.create({
        messages: [{role: 'user', content: `${prompt}`}],
        model: 'gpt-3.5-turbo',
    });
    
    return completion.choices[0];
};


module.exports = {
    chatAi
};
