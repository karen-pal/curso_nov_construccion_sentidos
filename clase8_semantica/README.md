# Prereq
* node
* npm
* nearleyjs
* express
* cors

# Generar gramática

`nearleyc poema.ne -o poem.js`

## testear en la consola

`nearley-test -i "como gotas de rocío#sobre una hoja de loto#desaparezco" poem.js`

# Uso
levantar el server

node server.js

abrir desaparezco.html en un navegador.

introducir un poema. Versos separados por numerales.

# Ejemplos
florece#florece#florece


florece#como una hoja de loto#florece


florece#como una hoja de loto#desaparezco


como gotas de rocio#desaparezco#sobre el arbol muerto
