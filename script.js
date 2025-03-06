// Grab the form element
let form = document.getElementById('form');

// Attach an event listener to the form for the 'submit' event
form.addEventListener('submit', function (e) {
  // Prevent the default form submission behavior (page reload)
  e.preventDefault();

  // Collect the values from the input fields
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let phoneNumber = document.getElementById('number').value;
  let email = document.getElementById('mail').value;

  // Prepare the result string with the formatted output
  let result = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

  // Display the result in an alert
  alert(result);
});
