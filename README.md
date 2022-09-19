# Keikaku

Repositorio para el proyecto de la asignatura Infraestructura Virtual de la Universidad de Granada (2022/2023)

## Problema a resolver
Un *recruiter* de una empresa medianamente grande con cientos o miles de empleados tiene que leer cientos de currículms cuando en la empresa se hace una oferta de trabajo, buscando en cada uno de ellos las palabras claves importantes para la empresa que marcan la diferencia entre las personas que aplican al puesto.

Esta puede ser una tarea muy agotadora y costosa a priori, ya que no hay límite en cuanto a número de personas que aplican al puesto.

## Solución propuesta
Crear un servicio en la nube que sea capaz de recolectar todos los currículums de todas las personas que aplican al puesto y que mediante un reconocimiento de palabras clave en cada uno poder aceptar sólo a aquellos que tengan ciertos criterios (o rechazar aquellos que no los cumplan) o ciertas palabras clave elegidas por la empresa, para así agilizarle mucho al *recruiter* la elección de aquellas personas que sean realmente interesantes para la empresa para poder solicitarles una entrevista más adelante.

Además es una solución muy flexible ya que en función de unas etiquetas específicas proporcionadas por la empresa se puede adaptar a las necesidades de ésta sin esfuerzo.

## ¿Por qué en la nube?
La nube es una buena solución para éste servicio porque así no nos limitamos a desarrollar el producto para una sóla empresa, si no que se puede adaptar perfectamente a todas las empresas que quieran disfrutar de su uso, además de tener un coste más bajo que si fuese un software propio para una empresa específica.

## Lógica de negocio

La lógica de negocio se basa en que un reclutador de una empresa pueda a partir de unos intereses dados, filtrar entre todos los currículums recibidos por la empresa (ya sea vía e-mail o almacenados en el propio cloud) y pueda símplemente centrarse en aquellos que tiene un potencial para la empresa mediante dos opciones (a decidir todavía cuál de ellas es mejor solución):

- Borrado de los currículums (o bien los mails o bien los archivos) que no cumplen cierto número de los requisitos para ser aceptados.

- Envío de currículums aceptados a una dirección de correo del reclutador o servidor de la empresa que solicita el servicio.

### Configuraciones de git
Para ver las configuraciones que he hecho de git haz [click aquí](Sesiones/objetivo-0.md)