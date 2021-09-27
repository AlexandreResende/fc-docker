FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

# RUN  mkdir /var/www/laravel/public -p && touch /var/www/laravel/public/index.js

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]