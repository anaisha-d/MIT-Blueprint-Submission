

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: setPageBackgroundColor,
//     });
//   });

  // The body of this function will be executed as a content script inside the
  // current page
  const qna = [{"answers": [
        "Donetsk and Luhansk",
        "Russian military reservists",
        "the Ukrainian army",
        "Women, children and the elderly"
    ],
    "correct": 3,
    "question": "Who has been ordered to evacuate to Russia?"}]

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("quizButton").addEventListener("click", displayQuestions);
    });
    qc = document.getElementById("quizContainer")

    result = ""
    function myFunction(browser) {
        result = browser;
      }

function displayQuestions() {
    let output = []
    let answers = []
    s = document.getElementById("start")
    s.remove()
    answers.push(`<form>
    <input type="radio" id="1" name="1"  onclick="myFunction(this.value)" value="Donetsk and Luhansk">
    <label for="age1">Donetsk and Luhansk</label><br>
    `)
    answers.push(`
    <input type="radio" id="1" name="1" onclick="myFunction(this.value)" value="Russian military reservists">
    <label for="age1">Russian military reservists</label><br>
    `)
    answers.push(`
    <input type="radio" id="1" name="1" onclick="myFunction(this.value)" value="the Ukrainian army">
    <label for="age1">the Ukrainian army</label><br>
    `)
    answers.push(`
    <input type="radio" id="1" name="1" onclick="myFunction(this.value)" value="Women, children and the elderly">
    <label for="age1">Women, children and the elderly</label><br></form>
    `)
    output.push(
        `<div id="question"> Who has been ordered to evacuate to Russia? </div>
        <div id="answers"> ${answers.join('')} </div> <div id = "result"><h1>${result}</h1></div>`
      );
    output.push(`<div id = "submit"><button>Submit</button></div>`)
      qc.innerHTML = output.join('');
}






// function showResults(){

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');
  
//     // keep track of user's answers
//     let numCorrect = 0;
  
//     // for each question...
//     qna.forEach( (currentQuestion, questionNumber) => {
  
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;
  
//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });
  
//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }
// function generateQuestions() {
//     alert("hi")
//     const requestoptions = {
//         method: "POST",
//         mode: "cors",
//         body: JSON.stringify({
//             key: "asjfh laskj fhlkasjfh kjashfl kjashfjasfhkljashf"
//         }),
//         headers:{
//             "Content-type": "application/json; charset=UTF-8" 
//         }
//     }

//     fetch("http://www.michellemobius.org:9005/qa", requestoptions).then(response => response.json()).then(json => {
//         alert(json)
//     }
//     )
// }

// generateQuestions()





