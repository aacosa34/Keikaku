# Elección del gestor de dependencias

Como gestor de dependencias tenemos varias opciones conocidas:

- El gestor de paquetes de Node.js conocido como __npm__: es uno de los gestores de paquetes más extendidos y más usados en proyectos de JS. Al ser uno de los gestores de paquetes/dependencias más usados nos proporciona una gran cantidad de paquetes de código abierto a nuestra disposición.

- __yarn__: no lo conozco de primera mano pero si he leído sobre este gestor de paquetes. Según [este artículo](https://openwebinars.net/blog/que-es-yarn/) funciona igual que npm con la diferencia de que éste es más seguro y rápido y usa un comprobador de licencias sus paquetes, lo cual ayuda a saber exactamente qué estamos insalando.

Existen algunos más pero no están tan extendidos. Sin embargo, al haberme decantado por el runtime __bun__, usaré su sistema de gestor de dependencias. Usa NPM como gestor de dependencias pero como digo en #28 está orientado a la velocidad. NPM es muy lento instalando paquetes, pero __bun__ instala las dependencias muchísimo más rapido que NPM aún usandolo también. Usa para ejecutar sus scripts un archivo `package.json` donde se declaran todas las dependencias del proyecto. También lo uso por su simpleza de uso y por la extensa documentación existente que tiene el gestor de paquetes NPM, como ya digo, debido a su extendido uso.
