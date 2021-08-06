let suggestions = [{suggestion: 'Add more suggestions!! :)'}]

module.exports = {
    getCompliment: (req, res) => {
            const compliments = [
                "Gee, you're a smart cookie!",
                "Cool shirt!",
                "Your Javascript skills are stellar.",
            ];
          
            // choose random compliment
            let randomIndex = Math.floor(Math.random() * compliments.length);
            let randomCompliment = compliments[randomIndex];
          
            res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortuneList = [
            'May your shirt sleeves be shorter than your pant legs.',
            'RUN!',
            `"Tomorrow" is often the busiest day of the week.`,
            'Life is short, smile while you still have teeth.',
            `Help! I'm trapped in a computer!`,
            'People come and go, but the right ones stay by your side.',
            `Failure is when you don't try.`];
      
        let randomIndex = Math.floor(Math.random() * fortuneList.length);
        let randomFortune = fortuneList[randomIndex];
      
        res.status(200).send(randomFortune);
      },
      getSuggestion: (req, res) => {
          console.log(suggestions)
        let randomIndex = Math.floor(Math.random() * suggestions.length);
        let randomSuggestion = suggestions[randomIndex].suggestion;
      
        res.status(200).send(randomSuggestion);
        
      },
      postSuggestion: (req, res) => {
        let { suggestion } = req.body;
        let newSuggestion = {
            suggestion
        }
        suggestions.push(newSuggestion)
        res.status(200).send('Suggestion Added')
      }
}