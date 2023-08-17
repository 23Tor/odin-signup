// Instantiate objects
const password = document.getElementById("psw")
const passwordConfirmation = document.getElementById("passwordconf")
const passwordPattern = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
const submitButton = document.getElementById("submit-button")

var checkMatch = function () {
  if (document.getElementById('psw').value ==
    document.getElementById('passwordconf').value) {
    document.getElementById('confirmation-message').style.color = 'green';
    document.getElementById('confirmation-message').innerHTML = 'Matching!';
  } else {
    document.getElementById('confirmation-message').style.color = 'red';
    document.getElementById('confirmation-message').innerHTML = 'Not matching';
  }
}

var checkFormat = function () {
  if (passwordPattern.test(password.value)) {
    document.getElementById("password-message").style.color = 'green';
    document.getElementById("password-message").innerHTML = 'Valid!';
  } else {
    document.getElementById("password-message").style.color = 'red';
    document.getElementById("password-message").innerHTML = 'Invalid';
  }
};