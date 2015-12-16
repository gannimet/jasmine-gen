// CONFIGURATION
var filterName = 'isSwitchable';
var filterArguments = [
	'device'
];
// END CONFIGURATION

var output = "'use strict';\n\n";

output += "describe('" + filterName + "', function() {\n";
output += "\tvar " + filterName;
for (var i = 0; i < filterArguments.length; i++) {
	output += ", " + filterArguments[i];
}
output += ";\n\n";

output += "\tbeforeEach(module('__ModuleName__'));\n\n";

output += "\tbeforeEach(inject(function($injector) {\n";
output += "\t\tvar $filter = $injector.get('$filter');\n";
output += "\t\t" + filterName + " = $filter('" + filterName + "');\n\n";
for (i = 0; i < filterArguments.length; i++) {
	output += "\t\t" + filterArguments[i] + " = 'sinep" + (i+1) + "';\n"
}
output += "\t}));\n\n";

output += "\tit('should', function() {\n";
output += "\t\texpect(" + filterName + "(" + argsList(filterArguments) + ")).toEqual('hurz');\n";
output += "\t});\n";

output += "});";

console.log(output);

function argsList(params) {
	var str = "";

	for (var i = 0; i < params.length; i++) {
		str += params[i];
		if (i < (params.length - 1)) {
			str += ", ";
		}
	}

	return str;
}
