function cPrime() {
    const n = parseInt(document.getElementById("input").value);
    const res = document.getElementById("result");

    if (isNaN(n) || n < 1) {
        res.textContent = "Please enter a number greater than 1."
        res.style.color = "red";
        return;
    }
    let isPrime = true;
    for ( let i =2; i <= Math.sqrt(n); i++) {
        if ( n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        res.textContent = `${n} is a prime number.`;
        res.style.color = "green";
    } else {
        res.textContent = `${n} is not a prime number.`;
        res.style.color = "blue";
    }
}


// The function retrives the user input as a number from an input field with the id input.
// It checks if the input is a number greater than 1 otherwise it displays a red error message.
// A for loop iterates from 2 to the square root of the input number to check divisibility. If any divisor is found, isPrime is set to false and the loop breaks.
// If the number is prime a success message is displayed in green otherwise a non-primee message is shown in blue.
// The result is dynamically  updated in an elemnt with the id result.