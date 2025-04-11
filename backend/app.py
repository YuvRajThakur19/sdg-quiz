from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()
    print("Received data from React:", data)

    # You can save it to a file, database, or process it further
    return jsonify({"message": "Data received successfully!"})

if __name__ == "__main__":
    app.run(debug=True)