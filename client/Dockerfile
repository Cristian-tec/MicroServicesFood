FROM node:16

WORkDIR /app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm" , "start"]