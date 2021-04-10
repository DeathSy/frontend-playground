FROM node:15.1.0-alpine

ARG port
ARG host

ENV PORT=${port}
ENV HOST=${host}

WORKDIR /app

ADD . /app

RUN yarn

EXPOSE ${port}

CMD [ "yarn", "dev" ]
