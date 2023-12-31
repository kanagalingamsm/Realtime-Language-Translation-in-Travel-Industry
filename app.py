from flask import Flask, render_template, request, jsonify
from deep_translator import GoogleTranslator

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("translator.html")

@app.route("/translate", methods=["POST"])
def translate():
    text = request.json.get("text")
    target_language = request.json.get("targetLanguage")
    
    # Use the Google Translator to translate the text
    translator = GoogleTranslator(source='auto', target=target_language)
    translated_text = translator.translate(text)
    
    return jsonify({"translated_text": translated_text})

if __name__ == "__main__":
    app.run(debug=True)
