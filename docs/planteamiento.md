# Planteamiento del proyecto

## Historias de Usuario

- [[HU01] Hortensia quiere encontrar al candidato que más se ajuste al perfil del puesto ofertado de la forma más simple y rápida posible.](https://github.com/aacosa34/Keikaku/issues/7)
  > Hortensia quiere tener la mínima interacción con los PDF de los currículums porque se lía ordenando éstos. Por tanto le gustaría ver de un simple vistazo sólo la información de los candidatos que fuesen más afines (es decir, que más se parezcan a lo especificado en cada sección de la oferta) con la oferta de empleo sin tener que manejarse con los ficheros y así evitar perder el tiempo con aquellos currículums que no cumplan el formato estándar exigido por la oferta ni sus requerimientos mínimos.

- [[HU02] Hortensia quiere ahorrarse el tener que buscar el teléfono o email de contacto dentro de aquellos currículums que sean aceptados para agilizar el proceso de concertar las entrevistas.](https://github.com/aacosa34/Keikaku/issues/6)
  > Hortensia pierde también demasiado tiempo buscando dentro de cada currículum los datos de contacto de cada posible candidato, tarea que también se le hace bastante repetitiva. Además, cada persona tiene un diseño y distribución de los datos distinto en su currículum, por lo que tiene que hacer un esfuerzo buscando dónde se encuentran estos datos.

## Milestones

- [[M0] Implementación de las estructuras de datos para gestionar los currículums y las ofertas de trabajo](https://github.com/aacosa34/Keikaku/milestone/2)
  > Con este milstone interno se pretende crear la implementación de las clases necesarias para la represenación del modelo del problema que compilen correctamente. 
  > En este milestone se debe crear la implementación del modelo referente a:
  > - Los curriculums
  > - Las ofertas de empleo

- [[M1] Código de clase o clases que implemente/n la lógica de negocio necesaria para buscar en los currículums la información relevante en función de la oferta de empleo a la que va dirigido.](https://github.com/aacosa34/Keikaku/milestone/6)

- [[M2] Implementación de un API que permita obtener los datos contenidos en los currículums de aquella/s persona/s mejor cualificada/s.](https://github.com/aacosa34/Keikaku/milestone/9)
  > A partir de los datos que conocemos sobre todos los currículums de las personas que aplican a la oferta de trabajo, implementar un API que devuelva (ordenados por cantidad de criterios definidos en M1 encontrados en los CVs) los datos de contacto de todos ellos.
