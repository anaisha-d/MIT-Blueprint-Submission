from flask import Flask
from flask import jsonify
from flask import request
from pipelines import pipeline
import json
from nltk.tokenize import sent_tokenize
import random

nlp = pipeline("question-generation")

app = Flask(__name__)

@app.route('/qa/', methods=['GET', 'POST'])
def qa():
    content = request.json
    #only use up to 10 sentences to not overload the server
    #start by splitting text into sentences
    sentences=sent_tokenize(content["text"])
    truncatedSentences = []
    count=0
    for s in sentences:
      if count>10:
         break
      truncatedSentences.append(s)
      count=count+1
    #now concatenate into a single text
    text= " ".join(truncatedSentences)
    questionAnswers=nlp(text)
    #if there are fewer than 2 QA then we cant make multiple choice and return nothing
    if len(questionAnswers)<2:
      return None
    #select a random question
    random.shuffle(questionAnswers)
    #now we use the first question as our correct question
    correctPair=questionAnswers[0]
    #we choose up to 4 other answers from the next
    otherAnswers=[]
    for i in range(1,len(questionAnswers)):
       if len(otherAnswers)>3:
         break
       otherAnswers.append(questionAnswers[i]["answer"])
    correctQuestion=correctPair["question"]
    #we have to insert the correct answer into the otherAnswers
    correctAnswer=random.randint(0,len(otherAnswers))
    answers=[]
    for i in range(0,correctAnswer):
       answers.append(otherAnswers[i])
    answers.append(correctPair["answer"])
    for i in range(correctAnswer,len(otherAnswers)):
       answers.append(otherAnswers[i])
    output={}
    output["question"]=correctQuestion
    output["answers"]=answers
    output["correct"]=correctAnswer
    print(output)
    return json.dumps(output)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9005)
