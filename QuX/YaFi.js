let body = $response.body
body=JSON.parse(body)
delete body.adUnits['nativeAdInfo']
body=JSON.stringify(body)
$done({body})
