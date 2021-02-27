FROM node:latest
WORKDIR /bin/app

COPY package.json yarn.lock ./

RUN yarn
COPY . . 

# COPY ./ormconfig.docker.json ./ormconfig.json

EXPOSE 4000 

CMD ["node", "./dist/index.js"]

# Update Heroku App 