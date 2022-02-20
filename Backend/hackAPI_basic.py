from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/qa/', methods=['GET', 'POST'])
def qa():
    content = request.json
    print(content)
    return jsonify({'name':'Jimit',
                    'address':'India'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9005)
