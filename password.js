//Simple password script that includes password has been entered print out
//Myla Fairchild

function isPasswordValid(input) {
  if (hasUpperCase(input) || hasLowerCase(input)) {
    console.log('The password has been entered.')
  }

  if (!hasUpperCase(input) || !hasLowerCase(input)) {
    console.log('The password needs a capital letter!')
  }

  if (!isLongEnough(input)) {
    console.log('The password has to have at least 8 letters!')
  }

  if (!hasSpecialCharacters(input)) {
    console.log('You need a special character: !,@,#,^,%')
  }
}


function hasUpperCase(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] === input[i].toUpperCase()) {
        return true;
      }
    }        
  }

 
function hasLowerCase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

 
function isLongEnough(input) {
  if (input.length >= 8) {
    return true;
  }
}

 
function hasSpecialCharacters(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
      if (input[i] === specialCharacters[j]) {
        return true;
      }
    }
  }
}

 
isPasswordValid('Testing!');
