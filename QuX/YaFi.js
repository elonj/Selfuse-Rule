let body = $response.body
body=JSON.parse(body)
adUnitsGet = body['adUnits']
for(var i = 0; i < adUnitsGet.length; i++){
    delete adUnitsGet[i]['adFrames']
  }
body=JSON.stringify(body)
$done({body})
