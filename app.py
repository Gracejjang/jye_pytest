from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# 문제/정답 (나중에 확장 가능)
QUESTION = 'print("Hello", "Python!")'
ANSWER = 'Hello Python!'

@app.route("/")
def index():
    return render_template("index.html", question=QUESTION)

@app.route("/check", methods=["POST"])
def check_answer():
    data = request.json
    user_answer = data.get("answer", "").strip()
    is_correct = user_answer == ANSWER
    return jsonify({
        "result": "correct" if is_correct else "incorrect"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
