import express from 'express'
import bodyParser from 'body-parser'
import {
  Configuration,
  OpenAIApi
} from 'openai'
import * as dotenv from 'dotenv'
 
dotenv.config() 
const app = express() 

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.listen(1000, () => console.log('Foskaay Ai server started on http://localhost:1000'))

// Open AI API 
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// create instance of Openai and pass in the configuration object created above
const openai = new OpenAIApi(configuration);

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello Web3 AI World from Foskaay AI',
  })
})

app.post('/question', (req, res) => {
  const prompt = req.body.prompt; //access user question submited as prompt 
  console.log(prompt)
  getResponse(prompt,data=>{
    console.log(data.choices[0].text)
    res.send(data)
  })
  
})

async function getResponse(myPrompt,callback){
  await openai.createCompletion({
    model: "text-davinci-003",
    prompt: myPrompt,
    max_tokens:2048
  }).then(res=>{
    callback(res.data)
  })
}
 