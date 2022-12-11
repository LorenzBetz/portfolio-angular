# stage 1

FROM node:alpine AS portfolio
WORKDIR /app
COPY . .
RUN npm ci && npm run build --prod

# stage 2

FROM nginx:alpine
RUN apk update
RUN apk upgrade
RUN apk add bash
COPY --from=portfolio /app/dist/portfolio /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 555 /usr/share/nginx/html/assets
EXPOSE 80