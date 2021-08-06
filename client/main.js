const submitBtn = document.getElementById('submitButton')
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const suggestBtn = document.getElementById("suggestionButton")
let dropdown = document.getElementById('dropdown')


function getCompliment(e) {
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
}

function getFortune(e) {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (res) {
        const data = res.data;
        alert(data);
    });
}

function getSuggestion(e) {
    axios.get("http://localhost:4000/api/suggestion/")
    .then(function (res) {
        const data = res.data;
        alert(data);
    });
}

const postSuggestion = data => axios.post("http://localhost:4000/api/suggestion/", data).then((res) => alert(res.data))

function submitHandler(e) {
    e.preventDefault()

    let form = document.getElementById('suggest-input')
    let suggestion = form.value

    let bodyObj = {
        suggestion
    }
    postSuggestion(bodyObj)

    form.value = ''
}

function selectDisplay() {
    if(+dropdown.value === 1){
        alert('Keep a digital notebook, I recommend apps such as Notion or OneNote.')
    } else if(+dropdown.value === 2){
        alert('Start using your mobile calendar consistently, almost annoyingly so. Apps such as Google Calendar or icalendar can be life savers. Put EVERYTHING in there.')
    } else  if(+dropdown.value === 3){
        alert('Place your alarm on the opposite side of your room. This will force you to get up and out of bed to turn it off. If you are tempted to hop back in bed after this, place a second alarm on a seperate device somewhere else in your house for 5 minutes after the first alarm, forcing you to stay up to turn it off.')
    }
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
suggestBtn.addEventListener('click', getSuggestion)
submitBtn.addEventListener('click', submitHandler)
