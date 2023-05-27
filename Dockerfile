FROM node:latest

WORKDIR /home/ubuntu/mc-status

COPY package.json /home/ubuntu/mc-status
RUN npm install

COPY . /home/ubuntu/mc-status

CMD ["node", "app.js"]