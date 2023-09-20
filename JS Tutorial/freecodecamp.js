// how to declare variable - var, let, const
// var can be used in the whole program, let can only be used in the scope, const can never be changed
var name = "Beau";

// all lines need to end with semicolon, string need to be in single or double quotes


// to print: console.log
console.log(name);


// To increment or decrement 1: 
num++; 
num--:


// The remainder operator: % - used to determine if number is even or odd 
var remainder;
remainder = 11 % 3;


// double quoted string then how? put \"\" OR use single quotes OR use backticks
var myStr = "I am a \"double quoted\" string inside \"double quotes\""
var myStr = 'I am a "double quoted" string inside "double quotes"'
var myStr = `I am a "double quoted" string inside "double quotes"`


// To find length of string: variableName.length
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength)

// To find first char of the string: variable[0];
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// Can push elements into the END of array using the push function
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// So the array is now ["Stimpson", "J", "cat", ["happy", "joy"]]!


// Remove last item from array using pop function
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();


// Remove first item from array using shift function
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.shift();


// Can add elements into the beginning of array using the unshift function
var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift(["happy", "joy"]);
// So the array is now ["happy", "joy"]["Stimpson", "J", "cat"]!


// To call a function:
function ourReusableFunction() {
    console.log("Hello, World");
}

ourReusableFunction();


// Passing Values to Functions with Arguments
// Note that parameters are variables that act as placeholders for the values that are to be input to a function when it is called
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5 - When the function runs, it can use the info that's passed in the function


// Global Scope and Functions
// Scope refers to the visibility of variables
// Variables which are defined outside of a function block have global scope aka can be seen everywhere in your JS code
var myGlobal = 10;

// But if you assign a value within a function:
function fun1() {
    oopsGlobal = 5;
}

// If you didn't put var, then the variable is global but if you DO put var, then the variable is local aka scoped to this function

// Local Scope and Functions
// Variables which are defined within a function as well as the function parameters have local scope aka visible only within the function
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// Do note that it is possible to have both local and global variables with the same name. However, the local variable takes precedent over the global variable
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit()); // It's gonna return sweater instead of T-Shirt cos local  > global


// Return a Value from a Function with Return
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); // Returns 3

// Functions can have return statements, but they don't have to
var sum  = 0;
function addThree() {
    sum = sum + 3; 
}
// If you don't specify a return value, the return value is just undefined
// Purpose of return statement: Stops execution of a function and returns a value


// Stand in Line
// A queue is an abstract data structure where items are kept in order. New items can be added to back of queue and old items can be removed from the front of queue
function nextInLine (arr, item) {
    arr.push(item);
    return arr.shift(); // shfit moves first item and returns that first item
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // JSON.stringify is to change an array into a string so that it's easily printed out to the screen
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// If statement
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

// Equality operator - there's your usual 'if x == 3' but there's also a strict equality operator which is ===
// == converts both values being compared to a common type but the === does not do the type conversion
// this means that 3 === 3 is true but 3 === '3' is false cos it's a string but if you use 3 == 3 and 3 == '3' - both are correct

// Inequality operator - != and Strict inequality operator !== (opp of (strict) equality operator)


// Instead of using chained else if statements, can use switch statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break; // break is impt!
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }

    return answer;
}

// Default option in switch statement
// It's like a "else" statement
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
        }

        return answer;
}


// if you wanna go to the next case automatically, just remove break
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1));


// OBJECTS - similar to arrays but instead of using indexes, you use properties
// notes that properties are before the colon then values are after the colon
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// To access your property in an object you can use 1) Dot or 2) Bracket notation
// Dot notation 
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat; // Output: ballcap
var shirtValue = testObj.shirt; // Output: jersey

// Use dot notation to change property value
testObj.hat = "fedora";

// Bracket notation - can be used anytime but is required when your name has a space in it
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// bracket notation can also be used to look up object properties using variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; // using the variable playerNumber to look up obj property which is 16

// Use dot or bracket notation to add properties to object
ourDog['bark'] = "woof!"

// Use 'delete' to remove properties from object
delete ourDog.tails;

// Use Objects to lookup values
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie")); // Output: Chicago

// Check if an obj has a property with the hasown property method
var myObj = {
    gfit: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
   if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
   } else {
    return "Not Found"
   } // Will come back as true or false depending on if obj has the property or not
   
}

console.log(checkObj("gift")); // This will say true!

//timestamp: 2:19:!3

