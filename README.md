# Welcome to my page :wave:
### Run React App from Docker Container
Build Docker container.
```
docker build -t personal-site:latest .
```

Run detached Docker container with port 8000 exposed.
```
docker run -d -p 8000:8000 personal-site:latest
```

