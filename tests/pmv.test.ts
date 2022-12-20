import { Curriculum } from '../src/curriculum';
import { Oferta } from '../src/oferta';
import { readFileSync } from 'fs';

describe("Test de prueba", () => {
    test("Dummy test", () => {
        expect(true).toBe(true);
    })
})

describe("Tests del PMV", () => {
    let result : string;
    // Inicialización de las variables necesarias para ejecutar los tests
    beforeAll(() => {
        result = readFileSync('data/data.csv', 'utf8');
    })

    test("Lectura correcta del CSV", () => {
        expect(result).not.toBe("");
    })
})
