FROM node:lts-alpine 

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_ENV production

EXPOSE 3033

CMD ["npm", "start"]