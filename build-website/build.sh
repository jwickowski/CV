cp -f ../cv.md ./content/cv.md

docker build -t cv-hugo .
docker run -d --name cv-hugo-temp cv-hugo
docker cp cv-hugo-temp:/home/ubuntu/public ./public
docker rm -f cv-hugo-temp