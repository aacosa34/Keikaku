import { Oferta } from '../src/oferta';
import { readFileSync } from 'fs';

describe("Test de prueba", () => {
    test("Dummy test", () => {
        expect(true).toBe(true);
    })
})

describe("Tests del PMV", () => {
    let result : string;
    let data : string[];
    // Inicialización de las variables necesarias para ejecutar los tests
    beforeAll(() => {
        result = readFileSync('data/data.csv', 'utf8');
        data = result.split('\n');
        data.shift();
        data.splice(-1, 1);
    })

    test("Lectura correcta del CSV", () => {
        expect(result).not.toBe("");
    })

    test("Creación de la oferta a partir del CSV", () => {
        const nuevaOferta = new Oferta('data/data.csv');

        // Al finalizar, deberíamos tener tantos currículums como filas en el CSV sin contar
        // la cabecera y la última fila vacía
        expect(nuevaOferta.getCurriculums().length).toBe(data.length);
    })
})
