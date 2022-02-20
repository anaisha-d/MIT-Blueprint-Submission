from flask import Flask
from flask import jsonify
from flask import request
from pipelines import pipeline
import json

nlp = pipeline("question-generation")

app = Flask(__name__)

@app.route('/qa/', methods=['GET', 'POST'])
def qa():
    content = request.json
    questionAnswers=nlp(content["text"])
    print(content["text"])
    print(questionAnswers)
    return json.dumps(questionAnswers)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9005)
