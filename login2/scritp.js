const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e)=>{

  e.preventDefault();
  checkInputs();
});

function checkInputs(){

  //trim to remove whitespaces

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //add the conditons of the input

  if(usernameValue === ''){
    setErrorFor(username, 'Username can not be blank');
  } else {
    setSuccessFor(username);
  }


  if(emailValue === ''){
    setErrorFor(email, 'Email can not be blank');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Enter a valid email');
  } else {
    setSuccessFor(email);
  }


  if(passwordValue === ''){
    setErrorFor(password, 'Password can not be blank');
  } else {
    setSuccessFor(password);
  }
  
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


