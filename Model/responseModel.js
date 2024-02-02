import OpenAI from "openai";
const apiKey = process.env.API_KEY;

const openai = new OpenAI({ apiKey });

 async function chatAi(){
    const completion = await openai.chat.completions.create({
        messages: [{role: 'user', content: 'Hello Chatgpt'}],
        model: 'gpt-3.5-turbo',
    });

    console.log(completion.choices[0].message.content);
};


module.exports = chatAi;