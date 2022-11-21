# Elección del gestor de dependencias

Como criterios de selección del gestor de dependencias se va a tener en cuenta:

- Principalmente, su valoración en [Snyk Advisor](https://snyk.io/advisor/) en función de su seguridad, popularidad, mantenimiento y actividad de la comunidad.

- Como criterio extra, la velocidad de instalación de los paquetes.

Teniendo estos criterios en cuenta, como gestores de dependencias tenemos las siguientes:

- [__npm__](https://snyk.io/advisor/npm-package/npm) y [__pnpm__](https://snyk.io/advisor/npm-package/pnpm): ambos tienen una valoración de 100 debido a que son seguros, son muy populares, se mantienen regularmente (últimos release hace 4 días el de ambos) y tiene una comunidad activa.

- [__yarn__](https://snyk.io/advisor/npm-package/yarn): tiene una valoración de 85, ya que su último release fue hace 6 meses. En el resto de ámbitos iguala a _npm_ y _pnpm_.

Como _yarn_ es el que tiene menor valoración, lo descarto. Tanto _npm_ como _pnpm_ tienen muy buena valoración. Por lo tanto, viendo las [comparativas de rendimiento](https://pnpm.io/benchmarks) entre ambos, _elijo __pnpm__ como gestor de dependencias_.
