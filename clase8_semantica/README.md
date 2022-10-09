# Senryu
lenguaje para interactuar con animaciones

inspirado en la neblina y en la pintura taoista.

Pensado para servirles como inicio de lenguajes custom de interconexión

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
levantar el server

node server.js

abrir desaparezco.html en un navegador.

introducir un poema. 

>Versos separados por numerales. Ver ejemplos

# Ejemplos
florece#florece#florece


florece#como una hoja de loto#florece


florece#como una hoja de loto#desaparezco


como gotas de rocio#desaparezco#sobre el arbol muerto
