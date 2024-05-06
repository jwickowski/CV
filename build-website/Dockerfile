FROM ubuntu:latest
WORKDIR /home/ubuntu
RUN apt update
RUN apt install -y curl 
RUN curl -L https://github.com/gohugoio/hugo/releases/download/v0.125.6/hugo_extended_0.125.6_linux-amd64.deb -o hugo.deb
RUN apt install ./hugo.deb
RUN hugo version
COPY . .
RUN hugo 
#RUN hugo build

