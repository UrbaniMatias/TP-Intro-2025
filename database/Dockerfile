FROM postgres:17-alpine3.22

# La imagen de postgres ejecuta automaticamente cualquier archivo .sql que se copie en
# /docker-entrypoint-initdb.d/ cuando la base de datos se inicializa por primera vez.
COPY init/*.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
