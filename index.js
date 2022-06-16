const form = document.getElementById('form');
const username = document.getElementById('username');
const lname = document.getElementById('lname')
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const lnameValue = lname.value.trim();

    if(usernameValue === '') {
      username.placeholder = '';
        setError(username, 'First Name cannot be empty');
    } else {
        setSuccess(username);
    }

    if(lnameValue === '') {
      lname.placeholder = '';
      setError(lname, 'Last Name Cannot be empty');
  } else {
      setSuccess(lname);
  }

    if(emailValue === '') {
         if (!isValidEmail(emailValue)) {
          
          email.placeholder = "email@example/com";
          
        setError(email, 'Looks like this is not an email');
         }
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
         if (passwordValue.length < 8 ) {
          password.placeholder = '';
        setError(password, 'Password cannot be empty');
         }
    } else {
        setSuccess(password);
    }

};