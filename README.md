# Typescript REST API JWT
this is a REST API example using Nodejs, Mongodb, Typescript and JsonWebtoken with Passport.

# Requeriments
* Mongodb
* Nodejs/npm

### Create user

to create user send a post request

```
PARAMS:
{
  "email": "person@gmail.com",
  "password": "password"
}

POST: {{baseUrl}}/signup
```

### Login

to create user send a post request

```
PARAMS:
{
  "email": "person@gmail.com",
  "password": "password"
}

POST: {{baseUrl}}/signin
```

response:
```
{
  "token": "thisIsAToken"
}
```

### Page Authorization

special page:
```
header: {
  Authorization: Bearer {{token}}
}

GET: {{baseUrl}}/special
```
response:
```
{
  "message": "Authenticade!"
}
```
