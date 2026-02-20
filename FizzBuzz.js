// TODO: Define constants for the form and the result display area
const numSubmission = document.getElementById('number');
const results = document.getElementById('result');
const submitButton = document.getElementById('submit');

// TODO: Add the first line of the event listener to handle form submission
submitButton.addEventListener('click', function(Event) {
    Event.preventDefault();
    num = Number(numSubmission.value);
    if (num % 3 == 0 && num % 5 == 0) {
        results.textContent = 'FizzBuzz';
    } else if (num % 3 == 0) {
        results.textContent = 'Fizz';
    } else if (num % 5 == 0) {
        results.textContent = 'Buzz';
    } else if (isNaN(num)) {
        results.textContent = 'Now why would you do that.'
    } else {
        results.textContent = num;
    }
});
