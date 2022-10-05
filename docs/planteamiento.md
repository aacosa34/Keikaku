# Planteamiento del proyecto

## Historias de Usuario

- [[HU01] Hortensia quiere encontrar a la persona adecuada para el puesto ofertado.](https://github.com/aacosa34/Keikaku/issues/7)

  > Hortensia es muy indecisa con la elección de la persona adecuada para un puesto de trabajo. Tiene muchos currículums y no sabe por cuál decidirse y quiere un punto de vista más objetivo.

- [[HU02] Hortensia quiere ahorrar tiempo revisando los CVs.](https://github.com/aacosa34/Keikaku/issues/3)

  > Hortensia pasa muchísimo tiempo revisando uno por uno cada uno de los CVs que le llegan a una oferta de empleo revisando que cumplan los criterios exigidos, y se le hace una tarea demasiado repetitiva y agotadora.

- [[HU03] Hortensia quiere ahorrarse el tener que buscar el teléfono o email de contacto dentro de aquellos currículums que sean aceptados para agilizar el proceso de concertar las entrevistas.](https://github.com/aacosa34/Keikaku/issues/6)
  > Hortensia pierde demasiado tiempo buscando dentro de cada currículum los datos de contacto de cada posible candidato, tarea que también se le hace bastante repetitiva. Además, cada persona tiene un diseño y distribución de los datos distinto en su currículum, por lo que tiene que hacer un esfuerzo buscando dónde se encuentran estos datos.

## Milestones

- [[M1] Estructura de datos que defina qué hay que buscar en los currículums.](https://github.com/aacosa34/Keikaku/milestone/2)
  > En primer lugar tendremos que definir la estructura de datos que va a contener las características a buscar en el currículum de todas las personas que quieran aplicar al puesto. Para ello almacenaremos dichos requisitos con una estructura de datos acorde a cómo se van a utilizar éstos, es decir, necistamos una estructura de datos de la que podamos añadir, visualizar y editar para hacerlo lo más flexible posible.

- [[M2] Clase que contenga la información que debe almacenarse de cada uno de los currículums.](https://github.com/aacosa34/Keikaku/milestone/6)
  > Éste módulo debe contener todos los datos importantes de un currículum como pueden ser los datos personales (nombre, apellidos, fecha de nacimiento, por ej.), los datos de contacto (teléfono, email, redes sociales...) y características a destacar del currículum correspondientes a los criterios de la oferta de trabajo.

- [[M3] Función que procese los currículums y organice los datos importantes para la oferta de empleo de los currículums.](https://github.com/aacosa34/Keikaku/milestone/8)
  > Éste milestone relaciona los dos anteriores de modo que a partir de lo definido en M1 se hace una búsqueda en los currículums (en principio de formato arbitrario) y genera la estructura de datos para una persona de la forma en que se comenta en M2.

- [[M4] Un API que permita visualizar a partir de M2 los datos de contacto de aquellas personas mejor cualificadas.](https://github.com/aacosa34/Keikaku/milestone/9)
  > A partir de los datos que conocemos sobre todos los currículums de las personas que aplican a la oferta de trabajo, implementar un API que devuelva (ordenados por cantidad de criterios definidos en M1 encontrados en los CVs) los datos de contacto de todos ellos.
