let body = $response.body
body=JSON.parse(body)
delete body['nativeAdInfo']
body=JSON.stringify(body)
$done({body})
