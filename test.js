//WELCOME TO AI CLUB

//essential imports & boilerplate to use ai [run npm i openai dotenv]
    const OpenAI = require("openai")
    require('dotenv').config();
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

//lesson #0: bare bone chatbot (js)

async function askTutor (question){
    try{
        const response = await openai.chat.completions.create({
            model:"gpt-4o",
            messages:[
            {
                "role":"system",
                "content":[
                    {
                        "type":"text",
                        "text":"simple ai chat bot that can answer anything it has capabilities for. however, responses capped at one sentence."
                    }
                ]
            },
            {
                    "role":"user",
                    "content":[
                        {
                            "type":"text",
                            "text":question + "?"
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


//calling #0 work
askTutor('what is the color of the sky');