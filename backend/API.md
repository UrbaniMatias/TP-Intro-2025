# API

### (URL base) {protocolo}://{nombre-de-dominio}/{version}

El protocolo y el nombre del dominio dependen de dónde esté alojada la API y del dominio que se le asigne.  
**Ejemplo:** http://ejemplo.com/v1

## Create

### (POST) /usuario

### (POST) /aventura

### (POST) /aventura/{id-aventura}/pagina

### (POST) /aventura/{id-aventura}/{id-pagina}/opcion

## Read

### (GET) /usuarios

### (GET) /usuario/{id-usuario}

### (GET) /usuario/{id-usuario}/finales

### (GET) /aventuras

### (GET) /aventura/{id-aventura}

### (GET) /aventura/{id-aventura}/paginas

### (GET) /aventura/{id-aventura}/{id-pagina}

### (GET) /aventura/{id-aventura}/{id-pagina}/opciones

## Update

### (PUT) /usuario/{id-usuario}

### (PUT) /usuario/{id-usuario}/finales

### (PUT) /aventura/{id-aventura}

### (PUT) /aventura/{id-aventura}/pagina

### (PUT) /aventura/{id-aventura}/{id-pagina}/opcion

## Delete

### (DELETE) /usuario/{id-usuario}

### (DELETE) /aventura/{id-aventura}

### (DELETE) /aventura/{id-aventura}/{id-pagina}

### (DELETE) /aventura/{id-aventura}/{id-pagina}/{id-opcion}
