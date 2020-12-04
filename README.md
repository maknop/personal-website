# Welcome to my page :wave:
### Run Gatsby app from Docker Container
Build Docker container.
```
docker build -t personal-site:latest .
```

Run detached Docker container with port 8000 exposed.
```
docker run -d -p 8000:8000 personal-site:latest
```

### Run Gatsby app locally
Run this and then navigate to [here](localhost:8000).
```
npm run develop
```
