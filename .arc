@app
begin-app

@http
get /
get /api/hello
get /api/magnetico

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
