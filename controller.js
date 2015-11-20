// CONFIGURATION
var dependencies = [
	'widget',
	'appConditionService',
	'settingsWidgetConfiguration'
]
// END CONFIGURATION

var i;

console.log("'use strict';");
console.log('');
console.log("describe('__CtrlName__', function() {");

var variables = '\tvar $controller, $rootScope';
for (i = 0; i < dependencies.length; i++) {
	variables += ', ' + dependencies[i];
}
console.log(variables + ';');
console.log('');
console.log("\tbeforeEach(module('__ModuleName__'));");
console.log('');
console.log('\tbeforeEach(inject(function($injector) {');
console.log("\t\t$controller = $injector.get('$controller');");
console.log("\t\t$rootScope = $injector.get('$rootScope');");
for (i = 0; i < dependencies.length; i++) {
	if (dependencies[i] === '$scope') {
		console.log('\t\t$scope = $rootScope.$new();');
	} else {
		console.log('\t\t' + dependencies[i] + " = $injector.get('" +
			dependencies[i] + "');");
	}
}
console.log('\t}));');
console.log('');
console.log('\tfunction initializeController() {');
console.log("\t\t$controller('__CtrlName__', {");
for (i = 0; i < dependencies.length; i++) {
	var paramLine = '\t\t\t' + dependencies[i] + ': ' + dependencies[i];
	if (i < (dependencies.length - 1)) {
		paramLine += ','
	}
	console.log(paramLine);
}
console.log('\t\t});');
console.log('\t\t$rootScope.$digest();');
console.log('\t}');
console.log('');
console.log("\tdescribe('initialization', function() {");
console.log("\t\tit('should', function() {");
console.log('\t\t\tinitializeController();');
console.log('\t\t});');
console.log('\t});');
console.log('});');
