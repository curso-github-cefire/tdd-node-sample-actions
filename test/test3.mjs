//Librerías para testeo
import { assert } from 'chai';

//Carga del programa principal
import esPar from '../operations.js';


//Test
describe('Módulo operations', function () {
	describe('Función esPar', function () {
		it('Número par', function () {
			assert.equal(esPar(2),true);
		});
		it('Número impar', function () {
			assert.equal(esPar(3),false);
		});
		it('Número cero', function () {
			assert.equal(esPar(0),true);
		});
		it('Número negativo par', function () {
			assert.equal(esPar(-6), true);
		});
		it('Número negativo impar', function () {
			assert.equal(esPar(-3), false);
		});
	});
});