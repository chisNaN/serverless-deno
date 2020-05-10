@app
begin-app

@http
get /api/hello

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
