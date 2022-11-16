# Elección del gestor de tareas

Para la elección del gestor de tareas tendré en cuenta:

- que se use o se recomiende su uso para TypeScript o JavaScript.

- que se mantenga actualizado regularmente a día de hoy.

- que si puedo limitarme a usar el mínimo número de dependencias posible, mejor.

- su dificultad en el aprendizaje.

- su rendimiento

Existen, entre otros muchos, los siguientes gestores de tareas:

- __grunt__/__gulp__: gestores de tareas en los que se pueden automatizar tareas con el minimo esfuerzo en un archivo de configuración en formato JavaScript. Son bastante similares en cuanto a rendimiento. La diferencia más relevante es cómo realizan las tareas. Mientras _gulp_ necesita usar unos plugins para cada tarea (plugins diseñados para hacer la tarea muy bien), _grunt_ usa plugins para completar múltiples tareas al mismo tiempo.

- __yarn__/__npm__/__bun__: son gestores de paquetes/dependencias pero también pueden usarse como gestores de tareas mediante la declaración de una clave "script" en el fichero `package.json`, por lo tanto es muy simple, fácil y rápido de usar. Permite paralelizar tareas con el fin de maximizar la utilización de recursos y permite una gran escalabilidad.

- __make__: es un gestor de tareas con muy buen rendimiento en el que para declarar las tareas usa la sintaxis de bash, lo cual hace que su uso sea muy cómodo.

Todos los gestores de tareas mencionados son mantenidos con cierta regularidad Entre todos estos descarto _make_ por no ser el uno de los recomendados/usados regularmente para un proyecto de JavaScript o TypeScript. _Gulp_ o _grunt_ se suelen recomendar normalmente para un proyecto de JS/TS por tener buen rendimiento, pero teniendo en cuenta que bun es compatible con npm, que npm puede usarse como un task runner bastante completo para este proyecto. que si uso _npm_ no necesitaré instalar más dependencias adicionales como sí tendría que hacer con _grunt_ o _gulp_ y además de que su curva de aprendizaje es bastante plana, me voy a decantar por usar __npm__ como gestor de tareas.
