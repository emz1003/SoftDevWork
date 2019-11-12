from flask import Flask
from flask import render_template
import jinja2
import urllib3, json

app = Flask(__name__)

@app.route("/")
def root():
    m = urllib3.PoolManager()
    u = m.urlopen('GET', "https://api.nasa.gov/planetary/apod?api_key=bq9gvCRwxkSdY9KcFjOcfDD51KcdhmahpVMnI1GJ")
    response = u.data.decode("UTF-8")
    data = json.loads( response )
    return render_template("index.html", pic = data['url'], ex = data['explanation'], title = data['title'])

if __name__ == "__main__":
    app.debug = True

app.run()
