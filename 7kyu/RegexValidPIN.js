// Regex validate PIN code

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN(pin) {
  const regex = RegExp("^([0-9]{6}|[0-9]{4})$");
  return regex.test(pin);
}
