// program to find the factorial of a number


var number =prompt("Enter a positive integer: ");


if (number < 0) {
  alert("Error! Factorial for negative number does not exist.");
}

else if (number === 0) {
    alert("The factorial of number is 1.");
}

else {
   var fact = 1;
    for ( var i = 1; i <= number; i++) {
        fact =fact*i;
}
 alert("the factorial of number is " +fact);

 
}
