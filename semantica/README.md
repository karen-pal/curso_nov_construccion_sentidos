# Senryu
lenguaje para interactuar con animaciones

inspirado en la neblina y en la pintura taoista.

Pensado para servirles como inicio de lenguajes custom de interconexión

https://karen-pal.github.io/curso_construcci-n_sentidos/clase8_semantica/desaparezco.html

# Prereq
* node
* npm
* nearleyjs
* express
* cors

Escriben sus gramáticas en poema.ne usando BNF

# Generar automáticamente parser
Luego de escribir sus gramáticas, para generar un parser usen el comando

`nearleyc poema.ne -o poem.js`

## testear en la consola

`nearley-test -i "como gotas de rocío#sobre una hoja de loto#desaparezco" poem.js`

# Uso de senryu
levantar el language server

node server.js

levantar el file server

python3 cors_server.py

abrir desaparezco.html en un navegador.

introducir un poema, verso por verso. 


# Ejemplos
florece florece florece


florece como una hoja de loto florece


florece como una hoja de loto desaparezco


como gotas de rocio desaparezco sobre el arbol muerto

> Leer poema.ne para ver el vocabulario disponible.
> Para modificar senryu, modificar poema.ne y correr el comando para generar el parser nuevamente.

#Autocompletado
Adaptado de fuentes:
- https://www.lucaspaganini.com/academy/autocomplete-with-fuzzy-search-and-fuse-js
- https://github.com/LucasPaganini/published-content/tree/master/autocomplete-fuzzy-search

