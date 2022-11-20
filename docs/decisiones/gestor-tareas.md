# Elección del gestor de tareas

Para la elección del gestor de tareas tendré en cuenta la valoración que tienen las siguientes herramientas en [Snyk Advisor](https://snyk.io/advisor/), la cual representa la popularidad, el mantenimiento, la seguridad y el grado de actividad de la comunidad:

- [__grunt__](https://snyk.io/advisor/npm-package/grunt): tiene una nota de 85 debido a que hay poca actividad reciente en su repositorio de github. No se conocen problemas de seguridad recientes, es bastante conocido y tiene una comunidad activa.

- [__gulp__](https://snyk.io/advisor/npm-package/gulp): tiene una nota de 79. Esta nota se debe a que necesita una revisión de seguridad y a que el último commit de su repositorio de github fue hace un año (hace 4 de su última release). Tanto en popularidad como en comunidad tiene buena valoracion por seguir siendo uno de los gestores de tareas más usados a día de hoy.

Voy a considerar en esta lista también algunos de gestores de dependencias que pueden utilizarse como gestores de tareas:

- [__npm__](https://snyk.io/advisor/npm-package/npm): tiene un 100 en valoración. No se conocen fallos de seguridad actuales, muy popular, mantenido (hace 4 días de su última release) y tiene una comunidad activa.

- [__yarn__](https://snyk.io/advisor/npm-package/yarn): tiene un 85 de nota debido a que su última release es de hace 6 meses. En el resto de parámetros es perfecto.

- [__pnpm__](https://snyk.io/advisor/npm-package/pnpm): tiene un 100. Al igual que npm, su última release fue hace 4 días.

De los gestores de tareas mencionados, la mejor nota la tiene _grunt_. Considerando también los gestores de dependencias que he comentado, tendrían mejor nota _pnpm_ y _npm_. Entre un gestor de tareas específico y gestionar tareas simples con un gestor de dependencias, lo suyo sería usar el gestor específico. Ahora bien, teniendo en cuenta el proyecto que voy a realizar y la elección tomada con respecto al gestor de dependencias, podríamos usar _pnpm_ para ambas cosas ya que no realizaremos tareas demasiado complejas que requieran de funcionalidades muy específicas que sólo un gestor de tareas nos proporcione. Por tanto, _mi elección será usar __pnpm__ como gestor de tareas_.
