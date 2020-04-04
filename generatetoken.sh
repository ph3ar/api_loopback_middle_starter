curl -X POST -H "Content-Type:application/json"         \
-d '{"email": "me@domain.com", "password": "secret"}'   \
http://localhost:3000/api/users 

curl -X POST -H Content-Type:application/json -d {"email": "me@domain.com", "password": "secret"} http://localhost:3000/api/users
