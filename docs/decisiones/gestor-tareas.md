# Elección del gestor de tareas

Existen, entre otros muchos, los siguientes gestores de tareas:

- __grunt__/__gulp__: gestores de tareas en los que se pueden automatizar tareas con el minimo esfuerzo en un archivo de configuración en formato JavaScript. Son bastante similares en cuanto a rendimiento. La diferencia más relevante es cómo realizan las tareas. Mientras _gulp_ necesita usar unos plugins para cada tarea (plugins diseñados para hacer la tarea muy bien), _grunt_ usa plugins para completar múltiples tareas al mismo tiempo.

- __yarn__/__npm__/__bun__: son gestores de paquetes/dependencias pero también pueden usarse como gestores de tareas mediante la declaración de una clave "script" en el fichero `package.json`, por lo tanto es muy simple, fácil y rápido de usar. Permite paralelizar tareas con el fin de maximizar la utilización de recursos y permite una gran escalabilidad.

- __make__: es un gestor de tareas con muy buen rendimiento en el que para declarar las tareas usa la sintaxis de bash, lo cual hace que su uso sea muy cómodo.

Entre todos estos, y realizando el proyecto en TypeScript, lo mejor es que use un task runner que se recomiende su uso para éste o JavaScript. Dicho esto descarto _make_ por ese motivo. También, como voy a tener en cuenta la simpleza y la dificultad de aprendizaje del propio lenguaje del task runner. Teniendo en cuenta esto, que bun es compatible con npm, que npm puede usarse como un task runner bastante completo y que si uso _npm_ no necesitaré instalar más dependencias adicionales como sí tendría que hacer con _grun_ o _gulp_, me voy a decantar por usar __npm__ como gestor de tareas.
