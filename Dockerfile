FROM node:15.0.1-alpine as Builder

WORKDIR /app

ADD . /app

RUN yarn install --slient && yarn build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=Builder /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
