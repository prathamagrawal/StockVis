from flask import Flask, request, jsonify
from flask_cors import CORS
from DatabaseLoader.dataLoader import getData
import json
app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

with open('./DatabaseLoader/env.json', "r") as json_file:
    key = json.load(json_file)
alphaKey=key['ALPHA_KEY']   


@app.route('/submit', methods=['POST'])
def submit_form():
    response = request.json 
    data,metadata=getData(response,alphaKey)
    print(data)
    print(metadata)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
