# Elección de biblioteca de aserciones y test runner

Para la elección tanto la biblioteca de aserciones como del test runner, tendré en cuenta qué valoración tiene en [Snyk Advisor](https://snyk.io/advisor). Además tendré en cuenta si la herramienta incluye tanto la biblioteca de aserciones como el test runner juntos para ahorrarme la instalación de una dependencia más.

- [Jest](https://snyk.io/advisor/npm-package/jest): Es un testing framework (completo). Tiene una valoración de 95.

- [Chai](https://snyk.io/advisor/npm-package/chai): Es una biblioteca de aserciones. Se suele usar junto con [Mocha](https://snyk.io/advisor/npm-package/mocha) como test runner. Tiene una valoración de 100.

- [Mocha](https://snyk.io/advisor/npm-package/mocha): Es un testing framework (sin biblioteca de aserciones). Tiene una valoración de 95 en snyk advisor.

- [Ava](https://snyk.io/advisor/npm-package/ava): Es un test runner. Tiene una valoración de 98 en snyk advisor.

- [Jasmine](https://snyk.io/advisor/npm-package/jasmine): Es un testing framework (sin biblioteca de aserciones). Tiene una valoración de 92.

La elección final será Jest ya que me proporciona ambas herramientas juntas y tiene muy buena valoración en Snyk Advisor.
