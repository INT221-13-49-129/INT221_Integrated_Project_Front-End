FROM node:14.16.1-alpine3.10 as build
WORKDIR /myfrontend
COPY package*.json ./
RUN npm install
COPY . /myfrontend
ARG BACKEND_URL
ENV VUE_APP_BACKEND_URL $BACKEND_URL
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80