import { Curriculum, Experiencia, puestoTrabajo, Idioma, nivelIdioma } from '../src/curriculum';
import { Oferta } from '../src/oferta';
import { readFileSync } from 'fs';

describe("Test de prueba", () => {
    test("Dummy test", () => {
        expect(true).toBe(true);
    })
})

describe("Tests del PMV", () => {
    let result : string;
    let cvs : Curriculum[];
    // Inicialización de las variables necesarias para ejecutar los tests
    beforeAll(() => {
        result = readFileSync('data/data.csv', 'utf8');
    })

    test("Lectura correcta del CSV", () => {
        expect(result).not.toBe("");
    })

    test("Creación del array de Currículums a partir del CSV", () => {
        const data = result.split('\n');
        // Eliminamos la primera fila (cabecera) y la ultima (fila vacia)
        data.shift()
        data.splice(-1, 1)
        let contador = 0;
        // Para cada fila, asigmanos los valores a las variables correspondientes
        cvs = data.map((row) => {
            contador++;
            let [experiencias, anyos, idiomas, niveles, estudios] = row.split(',');
            const arrayExp = experiencias.split(';');
            const arrayAnyosExp = anyos.split(';');
            const arrayIdiomas = idiomas.split(';');
            const arrayNiveles = niveles.split(';');
            const arrayEstudios = estudios.split(';');

            const exp = arrayExp.map((puesto, index) => {
                let value : Experiencia = { puesto: puesto as puestoTrabajo, tiempo: parseInt(arrayAnyosExp[index]) };
                return value;
            })

            const lang = arrayIdiomas.map((idioma, index) => {
                let value : Idioma = { idioma: idioma, nivel: arrayNiveles[index] as nivelIdioma }
                return value;
            })

            return new Curriculum(exp, arrayEstudios, lang);
        })

        // Al finalizar, deberíamos tener tantos currículums como filas en el CSV sin contar
        // la cabecera y la última fila vacía
        expect(cvs.length).toBe(data.length);
    })
})
