const express = require("express");
const cors = require("cors");
const app = express();
const ctrl = require('../controllers/controller')
app.use(cors());
app.use(express.json());


app.get("/api/compliment", ctrl.getCompliment);
app.get('/api/fortune', ctrl.getFortune)
app.get("/api/suggestion", ctrl.getSuggestion);
app.post('/api/suggestion', ctrl.postSuggestion)

app.listen(4000, () => console.log("Server running on 4000"));
