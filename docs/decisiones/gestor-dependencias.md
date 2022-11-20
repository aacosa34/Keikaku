# Elección del gestor de dependencias

Como criterios de selección del gestor de dependencias se va a tener en cuenta:

- que se encuentre actualizado a día de hoy.

- velocidad de instalación de los paquetes.

Teniendo estos criterios en cuenta, como gestores de dependencias tenemos las siguientes:

- __npm__: Es bastante lento instalando paquetes. En cuanto a su mantenimiento, es un proyecto de código abierto y su última versión fue lanzada hace 7 días.

- __pnpm__: Mejora la velocidad con respecto a _npm_ (hasta el doble de rápido). También es un proyecto de código abierto que actualmente se mantiene en constante desarrollo (se hizo un release hace 17 min cuando se está escribiendo esto).

- __yarn__: es una alternativa más lenta que pnpm. Es un proyecto de código abierto al igual que las dos opciones anteriores pero se actualiza menos frecuentemente, siendo su último commit el día 5 de septiembre de este año.

- __bun__: el runtime _bun_ permite también gestionar dependencias. Está orientado a que la instalación de dependencias sea lo más rápida posible. Es un proyecto de código abierto y sigue manteniendose actualizado a día de hoy (su última release fue hace 20 días).

Viendo la cadencia con la que se actualiza _yarn_ queda descartada. Nos quedaría _npm_, _pnpm_ y _bun_. De estas tres voy a escoger la que más velocidad tiene a la hora de instalar las dependencias de un proyecto (he rebuscado por internet algún benchmark y me he encontrado [esto](https://news.ycombinator.com/item?id=31993429)), que en este caso es el gestor de dependencias del runtime __bun__.
