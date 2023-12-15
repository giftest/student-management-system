FROM node:14

RUN apt-get update && \
    apt-get install -y yarn && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

EXPOSE 5000
