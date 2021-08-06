const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const suggestions = [];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortuneList = ['May your shirt sleeves be shorter than your pant legs.', 'RUN!', `"Tomorrow" is often the busiest day of the week.`, 'Life is short, smile while you still have teeth.', `Help! I'm trapped in a computer!`, 'People come and go, but the right ones stay by your side.', `Failure is when you don't try.`];

  let randomIndex = Math.floor(Math.random() * fortuneList.length);
  let randomFortune = fortuneList[randomIndex];

  res.status(200).send(randomFortune);
})

app.get("/api/suggestion", (req, res) => {
  let randomIndex = Math.floor(Math.random() * suggestions.length);
  let randomSuggestion = suggestions[randomIndex];

  res.status(200).send(randomSuggestion);
  
});

app.post('/api/suggestion', (req, res) => {
  let newSuggestion = req.body
})

app.listen(4000, () => console.log("Server running on 4000"));
