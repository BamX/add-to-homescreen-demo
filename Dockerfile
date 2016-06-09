FROM node:onbuild

RUN npm run bower-install

EXPOSE 8000
