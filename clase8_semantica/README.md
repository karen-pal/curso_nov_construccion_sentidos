# Prereq
* node
* npm
* nearleyjs
* express
* cors

# Generar gramática
`nearley-test -i "como gotas de rocío#sobre una hoja de loto#desaparezco" poem.js`

`nearleyc poema.ne -o poem.js`


# Ejemplos
florece#florece#florece


florece#como una hoja de loto#florece


florece#como una hoja de loto#desaparezco


como gotas de rocio#desaparezco#sobre el arbol muerto
