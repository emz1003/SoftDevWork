#Emily Zhang
#SoftDev1 pd 1
#K25 Getting More REST
#2019-11-14

import urllib3, json
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def root():

    m = urllib3.PoolManager()
    quotes = m.request('GET', 'http://quotes.rest/qod.json')
    qdata = json.loads(quotes.data)

    spacex = m.request(
        'GET', 'https://api.spacexdata.com/v3/launches?limit=1&offset=5')
    sxdata = json.loads(spacex.data)

    darksky = m.request(
        'GET', 'https://api.darksky.net/forecast/4a53d67435477c52cc1126c018404363/37.8267,-122.4233')
    dsdata = json.loads(darksky.data)

    return render_template(
        'index.html',
        quote=qdata['contents']['quotes'][0]['quote'],
        author=qdata['contents']['quotes'][0]['author'], 
        img=sxdata[0]['links']['mission_patch'],
        description=dsdata['alerts'][0]['description'])


if __name__ == '__main__':
    app.debug = True
app.run()
