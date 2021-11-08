# Comparison Operators and Booleans
## Examples 18-21

**18:** Returns either a false/true value from a function.
``` javascript
function ex18False() {
    return false;
}

function ex18True() {
    return true;
}
```

*19:** Tells the program to execute code if something is true. These conditions are Boolean conditions. When true, the code in the curly brackets will execute, and won’t if false. When false, if there is an else if/else statement, it will check to see if that is true. If not, the code will continue. Order matters to if/else statements. else if statements can be chained. 

``` javascript
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
```

**20a:** Equality operator. A comparison operator that checks if two values are equivalent; a boolean. It attempts to convert both values being compared to a common type.
``` javascript
console.log("20a: Equality Operator")
function ex20a(val) {
    if (val == 10) {
        console.log(val + " is equal to 10")
    } else {
        console.log(val + " is not equal to 10")
    }
}

ex20a(10);
ex20a("10");
ex20a(20);
```

**20b:** Strict equality operator. A comparison operator that also checks if two values are equivalent; a boolean. A strict equality operator that does not perform any conversion
``` javascript
function ex20b(val) {
    if (val === 10) {
        console.log(val + " is equal to 10")
    } else {
        console.log(val + " is not equal to 10")
    }
}

ex20b(10);
```

**20c:** Inequality Operator. Is the opposite of the equality operator; a boolean. Would return true if actually false, and vice versa. 
``` javascript
function ex20c(val) {
    if (val != 10) {
        console.log(val + " is not equal to 10")
    } else {
        console.log (val + ' is equal to 10')
    }
}

ex20c(20);
// The following, for some reason, won't work but it does in jsbin
ex20c("10");
ex20c(10);
```

**20d:** Strict Inequality Operator. Same as the inequality operator; a boolean. Will not convert data types. 
``` javascript
function ex20c(val) {
    if (val !== 10) {
        console.log(val + " is not equal to 10")
    } else {
        console.log (val + ' is equal to 10')
    }
}

ex20c(10);
// The following is a string
ex20c("10");
```

**20e:** Greater than operator; a boolean. Checks to see if a value is greater than another. 
``` javascript
function ex20e(val) {
    if (val > 10) {
        console.log(val + " is greater than 10")
    } else {
        console.log(val + " is not greater than 10")
    }
}

ex20e(11)
ex20e(9)
```

**20f:** Greater than or equal to operator; a boolean. Same as before, but also checks if it is equal. 
``` javascript
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
```

**20g:** Less than operator; a boolean. Checks to see if a value is less than another. 
``` javascript
function ex20g(val) {
    if(val < 10) {
        console.log(val + " is less than 10")
    } else {
        console.log(val + " is not less than 10")
    }
}

ex20g(9)
ex20g(11)
```

**20h:** Less than or equal to operator; a boolean. Same as before, but also checks if it is equal. 
``` javascript
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
```

**20i:** Logical And operator; a boolean. Only returns true if both values on the left and right are true.
``` javascript
function ex20i(val) {
    if (val > 10 && val < 20) {
        console.log(val + " is greater then 10, and less than 20")
    } else {
        console.log(val + " is not greater then 10, and not less than 20")
    }
}

ex20i(15)
ex20i(5)
```

**20j:** Logical Or operator; a boolean. Only returns true if either of the operands is true.
``` javascript
function ex20j(val) {
    if (val > 20 || val < 10) {
        console.log(val + " is greater then 20, or less than 10")
    } else {
        console.log(val + " is not greater then 20, or not less than 10")
    }
}

ex20j(15)
ex20j(5)
```

**21:** Returns the type of variable/value.
``` javascript
var num = 20
var string = "20"
console.log(typeof int)
console.log(typeof string)
```
