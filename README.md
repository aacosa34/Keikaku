# Keikaku

Repositorio para el proyecto de la asignatura Infraestructura Virtual de la Universidad de Granada (2022/2023)

---

## Objetivos

- [Objetivo 0](docs/objetivos/objetivo-0.md)
- [Objetivo 1](docs/objetivos/objetivo-1.md)

## Problema a resolver

El problema que se quiere resolver con el sistema planteado es reducir el tiempo que toma un _recruiter_ en revisar y contestar a cada uno de los CVs que le llegan a la empresa para una oferta de trabajo, ya que suele ser de forma manual y hay que revisar uno a uno las características de cada currículum además de pensar si esa persona es válida para el trabajo. También es dificil priorizar a determinadas personas frente a otras debido a que cada _recruiter_ tiene su punto de vista, por lo tanto se quiere obtener un punto de vista un poco más objetivo.

## Solución propuesta

Crear un servicio en la nube que sea capaz de recolectar todos los currículums de las personas que aplican al puesto y poder aceptar aquellos que tengan ciertos criterios (o rechazar aquellos que no los cumplan) o ciertas palabras clave elegidas por la empresa, para así ahorrar mucho tiempo al _recruiter_ y simplificar la elección de aquellas personas que sean realmente interesantes para la empresa y así poder solicitarles una entrevista más adelante.

También se podría establecer un orden específico de prioridades a los CV para que, en el caso de que alguna persona de los que habían sido seleccionados no obtiene el trabajo, exista una prioridad entre los CV que no llegaron a aceptarse.

Además es una solución muy flexible ya que en función de la empresa o de la oferta se puede adaptar a las necesidades de ésta sin esfuerzo.

## ¿Por qué en la nube?

La nube es una buena solución para éste servicio, en primer lugar, porque podríamos tener almacenados en la nube todos aquellos CVs que se envían en las solicitudes a la oferta.

Además, es una solución donde no nos limitamos a desarrollar el producto para una sóla empresa, si no que se puede adaptar perfectamente a todas las empresas que quieran disfrutar de su uso, además de tener un coste más bajo que si fuese un software propio para una empresa específica.

## Lógica de negocio

La lógica de negocio se basa en que un reclutador de una empresa pueda a partir de unos intereses dados, filtrar entre todos los currículums recibidos por la empresa y pueda símplemente centrarse en aquellos que tienen un potencial para la empresa de una forma sencilla.

También posibilita realizar estadísticas/informes sobre qué personas son las más propensas a aplicar a ciertos puestos de trabajo para así poder redactar de una mejor manera la oferta y de ese modo mejorar la efectividad en la búsqueda de nuevos empleados.

Adende de ésto, se podrá automatizar las respuestas a los aplicantes sobre si su CV ha pasado el filtro o no y el por qué de ello, así como de un conjunto de fechas disponibles para poder concertar una entrevista a aquellos que sean aceptados.

### Personas involucradas en el servicio

[Click aquí](docs/personas.md) para ver las personas que se ven afectadas por el uso de éste servicio.

### Historias de usuario y milestones

[Click aquí](docs/planteamiento.md) para ver las historias de usuarios y milestones.

---

### Configuraciones de git

Para ver las configuraciones que he hecho de git haz [click aquí](Sesiones/objetivo-0.md).
