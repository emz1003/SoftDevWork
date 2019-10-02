from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("home.html")


@app.route("/error1")
def error1():
    return "something else"

@app.route("/error2")
def error2():
    return "error 2"

@app.route("/error3")
def error3():
    return "error 3"

@app.route("/welcome")
def welcome():
    return "welcome"

@app.route("/loggedout")
def logged_out():
    return "you are logged out"
if __name__ == "__main__":
    app.debug = True
    app.run()

