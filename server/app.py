from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from DatabaseLoader.dataLoader import getData
import json
import pandas
app = Flask(__name__)
CORS(app, origins="http://localhost:3000",resources={r"/*":{"origins":"*"}})

with open('./DatabaseLoader/env.json', "r") as json_file:
    key = json.load(json_file)
alphaKey=key['ALPHA_KEY']   

fetchdata={}

@app.route('/submit', methods=['POST','GET'])
@cross_origin(origin='*')
def submit_form():
    if(request.method == 'POST'):
        response = request.json 
        data,metadata=getData(response,alphaKey)
        data['date'] = data.index
        fetchdata["raw"]=data
        
        print(data)
        return jsonify(response)
    if(request.method =='GET'):

        return jsonify(fetchdata["raw"].to_dict(orient="records"))


if __name__ == '__main__':
    app.run(debug=True)
