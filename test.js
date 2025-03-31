//WELCOME TO AI CLUB

//essential imports & boilerplate to use ai [run npm i openai dotenv]
    const OpenAI = require("openai")
    require('dotenv').config();
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

//lesson #1b: algebra tutor (in js)

async function askTutor (question){
    try{
        const response = await openai.chat.completions.create({
            model:"gpt-4o",
            messages:[
            {
                    "role":"user",
                    "content":[
                        {
                            "type":"text",
                            "text":"what is 2 + 2?"
                        }
                    ]
            }
            ]
        })

        console.log(response.choices[0].message.content)
    }
    catch(err){
        console.log(`there was an error talking to the ai...`)
    }

}
askTutor('fda');