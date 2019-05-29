console.log("In this example you can see how hoisting works. At first we check if x !== 3, which is true as x is not yet" +
    " defined and has 'undefined' value. \nWe used var below, so x get hoisted. If let was used instead x would cause a critical error.");

    if(3) {
        console.log(`if(x !== 3) {\nFirst log.\tx is not yet defined and its value is: ${x}\n\t\t\ty is also not defined and its value is: ${y}`);
        var y = 5;
        console.log(`var y = 5;\nSecond log.\tx is not yet defined and its value is: ${x}\ny is defined using var and its value is: ${y}`);
        if(y === 5) {
            var x = 3;
        }
        console.log('if(y === 5) {\n\tvar x = 3;\n}\n' + `Now as y is defined to 5 if statement finally defined x as 3\n` +
        `Even though y vas defined in a previous block we see it after the block, its value is: ${y}`);
    }
    if(x === 3) {
        console.log(`Now we are in a neighbouring block, but x and y are still visible. x is: ${x} and y is: ${y}` +
        "Changing 'var x = 3;' to let would fire errors: \n" +
            "line 4, 5, 7, 14: ReferenceError: x is not defined, because x is not yet initialized, nor created\n" +
            "line 11, 14, 15: ReferenceError: x is not defined, because x is initialized, but out of scope\n" +
            "Same with var y. Hoisting makes y available in every code block and initialized with 'undefined' before we define a value to it.");
    }