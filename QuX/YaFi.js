let body = $response.body
body=JSON.parse(body)
adUnitsGet = body['adUnits']
for(var i = 0; i < adUnitsGet.length; i++){
    //delete adUnitsGet[i]['nativeAdInfo']
    adFramesGet = adUnitsGet[i]['adFrames']
    for(var j = 0; j < adFramesGet.length; j++){
      adSpaceLayoutGet = adFramesGet[j]['adSpaceLayout']
      adSpaceLayoutGet['adWidth'] = 0
      adSpaceLayoutGet['adHeight'] = 0
    }
  }
body=JSON.stringify(body)
$done({body})
