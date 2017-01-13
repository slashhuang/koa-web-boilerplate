docker build -t iwjw-rent-platform-im:latest .
docker stop iwjw-rent-platform
docker rm iwjw-rent-platform
docker run -d -p 7000:7000 --name iwjw-rent-platform iwjw-rent-platform-im:latest