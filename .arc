@app
begin-app

@http
get /api/hello
get /api/magnetico/:param

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
