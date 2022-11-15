# Elección del gestor de dependencias

La inmensa mayoría de los gestores de dependencias más usados para proyectos de JavaScript/TypeScript son compatibles entre sí y todos usan en general los mismos paquetes. Por tanto, y por experiencia propia, como criterio de selección del gestor de dependencias se va a tener en cuenta la velocidad a la que instala los paquetes y la facilidad de añadir/eliminar paquetes y gestionar sus veriones. Y como criterio secundario, pero también muy importante, es que se mantenga actualizado.

Teniendo estos criterios en cuenta, como gestores de dependencias tenemos las siguientes:

- __npm__: es el gestor de paquetes por defecto de Node.js. Es el gestor de paquetes más utilizado sobre todo en proyectos de JavaScript. Permite definir la versión específica que se necesita de un determinado paquete para que funcione el sistema y pueden gestionarse (actualizar, borrar, instalar,...) los paquetes desde la línea de comandos. Usa un fichero `package.json` donde se le indica la ruta de las dependencias instaladas dentro de la carpeta `node_modules`. También nos permite diferenciar entre dependencias de producción y dependencias de desarrollo

- __pnpm__: funciona igual que npm pero reutilizando una instalación de una versión específica de un paquete si se usa en varios proyectos diferentes. Esto permite que la inicialización de un proyecto sea mucho más rapida. Para éste proyecto no me supone una mejora determinante con respecto a lo que ofrece npm ya que no me va a ser necesaria.

- __yarn__: es una alternativa más rapida que pnpm con un funcionamiento similar, pero para este proyecto no son unas mejoras demasiado considerables como para elegirlo.

- __bun__: es un gestor de paquetes que está orientado a que la instalación de paquetes sea lo más rápida posible. Es el gestor de paquetes que mejor rendimiento saca en comparación con yarn, npm y pnpm. Es un gestor de dependencias compatible con npm, luego se usa igual que los anteriores mencionados. Se usará bun debido a la característica de la velocidad.

Usaré por tanto __bun__ ya que ofrece la mejor velocidad de las opciones mencionadas y además al ser un proyecto relativamente nuevo de código abierto, se actualiza regularmente.
