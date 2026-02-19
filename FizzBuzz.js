// TODO: Define constants for the form and the result display area
const numSubmission = document.getElementById('number').value;
const results = document.getElementById('result');
const submitButton = document.getElementById('submit');

// TODO: Add the first line of the event listener to handle form submission
submitButton.addEventListener('submit', handleSubmission());

function handleSubmission() {
    num = Number(numSubmission)
    if (num % 3 == 0 && num % 5 == 0) {
        results.innerHTML = 'FizzBuzz'
    } else if (num % 3 == 0) {
        results.innerHTML = 'Fizz'
    } else if (num % 5 == 0) {
        results.innerHTML = 'Buzz'
    } else {
        results.innerHTML = numSubmission
    }
}

    // Prevent the form from refreshing the page
    event.preventDefault();

// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
result.textContent = output;
