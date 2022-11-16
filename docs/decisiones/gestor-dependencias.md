# Elección del gestor de dependencias

La inmensa mayoría de los gestores de dependencias más usados para proyectos de JavaScript/TypeScript son compatibles entre sí. Por tanto, y por experiencia propia, como criterio de selección del gestor de dependencias se va a tener en cuenta la velocidad a la que instala dependencias y la facilidad de añadir/eliminar estas dependencias y gestionar sus veriones. Y como criterio secundario, pero también muy importante, es que se mantenga actualizado.

Teniendo estos criterios en cuenta, como gestores de dependencias tenemos las siguientes:

- __npm__: Es bastante lento instalando paquetes. En cuanto a su mantenimiento, es un proyecto de código abierto y su última versión fue lanzada hace 7 días.

- __pnpm__: Mejora la velocidad con respecto a _npm_ (hasta el doble de rápido). También es un proyecto de código abierto que actualmente se mantiene en constante desarrollo (se hizo un release hace 17 min cuando se está escribiendo esto).

- __yarn__: es una alternativa más lenta que pnpm. Es un proyecto de código abierto al igual que las dos opciones anteriores pero se actualiza menos frecuentemente, siendo su último commit el día 5 de septiembre de este año.

- __bun install__: es el gestor de dependencias del runtime _bun_ que está orientado a que la instalación de dependencias sea lo más rápida posible. Tiene un mejor rendimiento en comparación con yarn, npm y pnpm. Es compatible con npm, luego se usa igual que los anteriores mencionados. Es un proyecto de código abierto y sigue manteniendose actualizado a día de hoy (su última release fue hace 20 días).

Todos añaden/eliminan dependencias con la misma facilidad mediante la línea de comandos (todas usan add/remove menos npm que usa install/uninstall para ello). Viendo la cadencia con la que se actualiza _yarn_ queda descartada. Nos quedaría _npm_, _pnpm_ y _bun install_. De estas tres voy a escoger la que más velocidad tiene a la hora de instalar las dependencias de un proyecto, que en este caso es __bun install__.
