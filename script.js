//Examples: 18-21
//18: You can return either false or true in a function
function ex18False() {
    return false;
}

function ex18True() {
    return true;
}

//19: You can create boolean if(), else if(), and else() statements. These execute if something is true, in the order written, and can be chained. The program will check each to see if they are true, if not, it will move on to the next part of the code.
console.log("19: The following are the results of a function with if/else statements")
function booleanIfElse(val) {
    if(val == 2){
        console.log(val)
    } else if(val == 3) {
        console.log(val)
    } else if(val == 4) {
        console.log(val)
    } else {
        console.log("The value " + val + " is not = to 2, 3, or 4")
    }
}

booleanIfElse(2);
booleanIfElse(3);
booleanIfElse(4);
booleanIfElse(5);

//20: The following are all the comparison operators learned (so far).
//20a: (Equality operator) A comparison operator that checks if two values are equivalent; a boolean. It attempts to convert both values being compared to a common type.
console.log("20a: Equality Operator")
function ex20a(val) {
    if (val == 10) {
        console.log(val + " is equal to 10")
    } else {
        console.log(val + " is not equal to 10")
    }
}

ex20a(10);
console.log("The following is a string")
ex20a("10");
ex20a(20);

//20b:(Strict equality operator) A comparison operator that also checks if two values are equivalent; a boolean. A strict equality operator that does not perform any conversion. For example. 3 = 3, but 3 ≠ ‘3’. The second example is an integer vs. a string.
console.log("20b: Strict Equality Operator")
function ex20b(val) {
    if (val === 10) {
        console.log(val + " is equal to 10")
    } else {
        console.log(val + " is not equal to 10")
    }
}

ex20b(10);
console.log("In the following, 10 is actually a string")
ex20b("10");

//20c: (Inequality Operator) Is the opposite of the equality operator; a boolean. Would return true if actually false, and vice versa.
console.log('20c: Inequality Operator')
function ex20c(val) {
    if (val != 10) {
        console.log(val + " is not equal to 10")
    } else {
        console.log (val + ' is equal to 10')
    }
}

ex20c(20);
console.log("The following, for some reason, won't work but it does in jsbin")
ex20c("10");
ex20c(10);

//20d: (Strict Inequality Operator) Same as the inequality operator; a boolean. Will not convert data types.
console.log("20d: Strict Inequality Operator")
function ex20c(val) {
    if (val !== 10) {
        console.log(val + " is not equal to 10")
    } else {
        console.log (val + ' is equal to 10')
    }
}

ex20c(10);
console.log("The following is string.")
ex20c("10");

//20e: (Greater than operator); a boolean. Checks to see if a value is greater than another.
console.log("20e: Greater-Than Operator")
function ex20e(val) {
    if (val > 10) {
        console.log(val + " is greater than 10")
    } else {
        console.log(val + " is not greater than 10")
    }
}

ex20e(11)
ex20e(9)

//20f: (Greater than or equal to operator); a boolean. Same as before, but also checks if it is equal.
console.log("20f: Greater-Than or Equal-To Operator")
function ex20f(val) {
    if (val >= 10) {
        console.log(val + " is greater than/equal to 10")
    } else {
        console.log(val + " is not greater than/equal to 10")
    }
} 

ex20f(10)
ex20f(11)
ex20f(9)

//20g: (Less than operator); a boolean. Checks to see if a value is less than another.
console.log("20g: Less-Than Operator")
function ex20g(val) {
    if(val < 10) {
        console.log(val + " is less than 10")
    } else {
        console.log(val + " is not less than 10")
    }
}

ex20g(9)
ex20g(11)

//20h: (Less than or equal to operator); a boolean. Same as before, but also checks if it is equal.
console.log("20h: Less-Than or Equal-To Operator")
function ex20h(val) {
    if(val <= 10) {
        console.log(val + " is less than/equal to 10")
    } else {
        console.log(val + " is not less than 10")
    }
}

ex20h(9)
ex20h(10)
ex20h(11)

//20i: (Logical And operator); a boolean. Only returns true if both values on the left and right are true.
console.log("20i: Logical And Operator")
function ex20i(val) {
    if (val > 10 && val < 20) {
        console.log(val + " is greater then 10, and less than 20")
    } else {
        console.log(val + " is not greater then 10, and not less than 20")
    }
}

ex20i(15)
ex20i(5)

//20j: (Logical Or operator); a boolean. Only returns true if either of the operands is true.
console.log("20j: Logical Or Operator")
function ex20j(val) {
    if (val > 20 || val < 10) {
        console.log(val + " is greater then 20, or less than 10")
    } else {
        console.log(val + " is not greater then 20, or not less than 10")
    }
}

ex20j(15)
ex20j(5)

//21: To find out the type of variable/value, use the operator "typeof"
console.log('The "number" and "string" are the type of variables')
var num = 20
var string = "20"
console.log(typeof int)
console.log(typeof string)

