ssh "ubuntu@65.1.129.250" "cd app/tara-food && sudo docker-compose stop && git pull origin main && sudo docker-compose up -d --build && exit"