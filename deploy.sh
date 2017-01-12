docker build -t iwjw-rent-platform-im:latest .
docker ps -a -q -f name=iwjw-rent-platform | xargs -I {} docker stop {}
docker ps -a -q -f name=iwjw-rent-platform | xargs -I {} docker rm {}
docker run -d -p 7000:7000 --name iwjw-rent-platform iwjw-rent-platform-im:latest