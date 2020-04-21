# SE Laptop Cart Pratham Rawat and Emily Zhang
# SoftDev1 Pd1
# K18 : Coming Up for Air
# 2020-04-20

from flask import Flask
from flask import render_template, session
import csv

app = Flask(__name__) # Create

@app.route("/")
def start():
    file = open("static/chartData.csv")
    rows = csv.reader(file)
    output = []
    for row in rows:
        if(row[6] != "NaN"):
            output.append([row[0], row[6] + "000"])
    return render_template("index.html", data = output[::2000])

if __name__ == "__main__":
    app.debug = True
    app.run()
