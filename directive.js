// CONFIGURATION
var directiveName = 'controlScheduleModal';
var config = {
	restrict: 'A'
};
// END CONFIGURATION

var _ = require('lodash');

var directiveElement;
if (config && config.restrict && config.restrict === 'E') {
	// render directive on element
	directiveElement = '<' + kebabizeDirectiveName(directiveName) + '>' +
		'</' + kebabizeDirectiveName(directiveName) + '>';
} else {
	// render directive on attribute
	directiveElement = '<div ' + kebabizeDirectiveName(directiveName) +
		'></div>';
}

var outputText = "'use strict';\n\n";
outputText += "describe('" + directiveName + "', function() {\n";
outputText += '\tvar element, $compile, $scope, $rootScope, isolateScope;\n\n';

outputText += "\tbeforeEach(module('templates'));\n";

outputText += "\tbeforeEach(module('__ModuleName__'));\n\n";
outputText += "\tbeforeEach(inject(function($injector) {\n";
outputText += "\t\t$compile = $injector.get('$compile');\n";
outputText += "\t\t$rootScope = $injector.get('$rootScope');\n";
outputText += "\t\t$scope = $rootScope.$new();\n";
outputText += "\t}));\n\n";

outputText += "\tfunction renderDirective() {\n";
outputText += "\t\telement = angular.element('" + directiveElement + "');\n";
if (config && config.scope) {
	for (var key in config.scope) {
		if (config.scope.hasOwnProperty(key)) {
			outputText += "\t\t$scope." + key + " = '" + key + "';\n";
		}
	}
}
outputText += "\t\t$compile(element)($scope);\n\n";
outputText += "\t\t$rootScope.$digest();\n";
outputText += "\t\tisolateScope = element.isolateScope();\n";
outputText += "\t}\n\n";

outputText += "\tdescribe('initialization', function() {\n";
outputText += "\t\tit('should initialize scope correctly', function() {\n";
outputText += "\t\t\trenderDirective();\n\n";
outputText += "\t\t\t// TODO\n";
outputText += "\t\t});\n";
outputText += "\t});\n";
outputText += "});";

console.log(outputText);

function kebabizeDirectiveName(dirName) {
	return 'data-' + _.kebabCase(dirName);
}