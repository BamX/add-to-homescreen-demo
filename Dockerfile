FROM node:onbuild

RUN npm bower-install

EXPOSE 8000
