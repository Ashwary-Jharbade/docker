FROM node:12
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 8000
CMD ["npm", "run", "start"]
