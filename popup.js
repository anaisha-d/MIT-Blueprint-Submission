

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
  const qna = {"answers": [
        "Donetsk and Luhansk",
        "Russian military reservists",
        "the Ukrainian army",
        "Women, children and the elderly"
    ],
    "correct": 3,
    "question": "Who has been ordered to evacuate to Russia?"}
q = qna.question
a1 = qna.answers[0]
a2 = qna.answers[1]
a3 = qna.answers[2]
a4 = qna.answers[3]
rightanswer = qna.correct

document.getElementById("quizButton").addEventListener("click", displayQuestions(qna));
function displayQuestions(qna) {
    alert("hi")
}

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





