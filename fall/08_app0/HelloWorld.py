from flask import Flask

app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when run route requested
def hello_word():
    print(__name__) #prints in flask output
    return "No hablo queso!"

@app.route("/hallo") #appears in address following with /hallo
def hallo():
    return "Ich lerne Deutsch"

@app.route("/bye")
def bye():
    return "bye!"

if __name__ == "__main__":
    app.debug = True
    app.run()