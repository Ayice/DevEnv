FROM node

ENV NODE_ENV=production
ENV PORT=5000

COPY . /var/www
WORKDIR /var/www
RUN npm install --production

EXPOSE ${PORT}
ENTRYPOINT ["npm", "start"]
