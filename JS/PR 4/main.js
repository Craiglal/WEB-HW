function validSequence(braces) {
    let tracer = []
    for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "[" || braces[i] === "<")
            tracer.push(braces[i])
        else {
            if(tracer.length === 0) 
                return false
            let lastValue = tracer[tracer.length-1]
            if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(') || (braces[i] === '>' && lastValue === '<'))
                tracer.pop()
            else
                break;
        }
    }
    return tracer.length === 0 
}

function myEqual(rec, exp, spec) {
	if (myDeepEqual(rec, exp)) {
		document.writeln("<p style='color: blue;'>OK</p>");
	}
	else {
		document.writeln("<p style='color: red;'>Failed&nbsp;&nbsp;&nbsp;" + spec +
			"; expected: " + exp + "; result: " + rec + "</p>");
	}
}

function myDeepEqual(rec, exp) {
	if (typeof (rec) != "object" && typeof (exp) != "object") return rec === exp;
	else return JSON.stringify(rec) == JSON.stringify(exp);
}


function myTest() {
    myEqual(validSequence(''), true, 'empty string validates');
    myEqual(validSequence('[]'), true, 'valid case []');
    myEqual(validSequence('()'), true, 'valid case ()');
    myEqual(validSequence('{}'), true, 'valid case {}');
    myEqual(validSequence('<>'), true, 'valid case <>');
    myEqual(validSequence('}'), false, 'invalid case }');
    myEqual(validSequence('({'), false, 'invalid case ({');
    myEqual(validSequence(')('), false, 'invalid case )(');
    myEqual(validSequence('[<]'), false, 'invalid case [<]');
    myEqual(validSequence('({)}'), false, 'invalid case ({)}');
    myEqual(validSequence('([](<{}>))'), true, 'valid case ([](<{}>))');
    myEqual(validSequence('({[](<{}>}))'), false, 'invalid case ({[](<{}>}))');
}

myTest();
