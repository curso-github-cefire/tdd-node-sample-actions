// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función par', function() {
	assert.equal(operaciones.par(21), false);
	assert.equal(operaciones.par(24), true);
	assert.equal(operaciones.par(137), false);
	assert.equal(operaciones.par(496), true);
});


