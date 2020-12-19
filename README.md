## 🅱isual Estudio Código + ETSISIJS

### Acerca del proyecto
Proyecto presentado para la Spaghetti Code IV Edición de Core Dumped, consiste en un clon del editor de Microsoft, Visual Studio Code, en el cual puedes editar archivos `.ejs` (ETSISIJS), en este lenguaje cada palabra reservada, propiedad, evento, etc de js es sustituida por usernames de twitter de estudiantes de la etsisi y alguna otra referencia a la escuela (por ejemplo la palabra reservada de js `class` equivaldria a `bloque_iii`). Despues puedes transpilar todos los archivos del proyecto a javascript y ejecutarlos en node o en el navegador
El editor tiene un *syntax highlighting* para este lenguaje y diferentes skins del editor

### Instalacion
##### Prerequisitos
- Utilizar Windows 10
- Instalar la última versión de node.js: https://nodejs.org/en/download/
- Instalar electronjs: `npm i -D electron@latest`
- Instalar el CLI de Angular globalmente: `npm install -g @angular/cli`
- Ir al directorio*spaghetti*  `cd spaghetti`
- Instalar dependencias: `npm i`

##### Hacer build del proyecto e iniciarlo
En el directorio *spaghetti* ejecutar: `npm run electron:build` esto hará una build del proyecto y lo inicializará

Una vez compilado puedes ejecutarlo cuando quieras simplemente con `npm run electron`

### Como usar

##### Cargar proyectos:
- Puedes usar el boton que hay en el explorador de archivos, utilizar la opcion del menu superior (Archivo > Abrir) o pulsar Ctrl + O
- Deberas cargar una carpeta que contega archivos .ejs, puede haber carpetas con ficheros dentros, funciona de manera recursiva
- Evita que la carpeta sea muy pesada o petara la app (tendras que reiniciarla)
- A veces no carga todos los ficheros, en ese caso tendras que cargar el directorio de nuevo

##### Editar archivos:
Una vez seleccionado un archivo del explorador podras editarlo, el resaltado de la sintaxis se hace mediante espacios, para las strings solo estan permitidas las comillas dobles "...", puedes resaltar el archivo manualmente mediante Ctrl+h y guardarlos con Ctrl+S

##### Transpilar

En la barra lateral izquierda, pulsa la segunda opcion que contiene un icono de codigo, se transpilaran todos los archivos automáticamente en `proyectname/out/` y podras ejecutarlos con node

##### Skins

En la barra lateral, seleccionando el icono del pastafari puede elegir la skin, o mejor dicho, la salsa.
Las opciones son: Sin salsa, Carbonara, Bolognesa y Pesto. Elige la que mas te guste!

 
### Tecnologias usadas

- Node.js
- ElectronJS
- Angular v11
- NodeJS
- SASS/SCSS
- FontAwesome
- RXJS
