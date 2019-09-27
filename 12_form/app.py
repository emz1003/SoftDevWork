# SE Laptop Cart Pratham Rawat and Emily Zhang
# SoftDev1 Pd1
# K12 : Echo Echo Echo
# 2019-09-26

from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)  # Create


@app.route("/")
def yeet():
    print(app)
    file = open("static/form.html", "r")
    return file.read()  # Reads file and returns HTML contents for start page


# Allows both GET and POST requests
@app.route("/auth", methods=['GET', 'POST'])
def authenticate():
    if request.method == 'POST':
        # Use request.form for POST request
        return render_template("authentication.html", username=request.form['username'], request=request.method)
#    print("\n" * 3)
#
#    print(app)
#    print(request)
#    print(request.args)
#    print(request.headers)
#    print(request.form)
        # Use request.args for GET request
        return render_template("authentication.html", username=request.args['username'], request=request.method)


if __name__ == "__main__":
    app.debug = True
    app.run()
