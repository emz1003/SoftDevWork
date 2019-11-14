#OpenFDA, OMDb, Petfinder
#SyK4634D4oYZzQ0pLitUecqQ3woLNUdc2m7auU4i - openFDA
#<Frist> <Lsat>
#SoftDev1 pd<p>
#K<n> -- <Title/Topic/Summary>
#<yyyy>-<mm>-<dd>

import urllib, json
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/openfda')
def openFDA():
    #https://api_basics.fda.gov/drug/event.json?api_key=yourAPIKeyHere&search=
    #https://api.fda.gov/drug/event.json?limit=1
    u = urllib.urlopen('https://api.fda.gov/drug/event.json?api_key=SyK4634D4oYZzQ0pLitUecqQ3woLNUdc2m7auU4i&limit=1')
    url = u.read()
    data = json.loads(url)
    return render_template('index.html', )

@app.route('/omdb')
def OMDb():

if __name__ == '__main__':
    app.debug = True
app.run()
