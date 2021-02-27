FROM node:latest

WORKDIR "c:\\Windows\\DImages"

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5555

CMD ["node", "index.js"]

# Update Heroku App 