FROM node:10
WORKDIR /Users/RL/Documents/personalweb

COPY package*.json ./
RUN npm install -g
COPY . .
EXPOSE 3000

CMD [ "node", "main.js" ]
