(function(validate){

  'use strict'

  var $buttonSend = document.querySelector("[data-js='btn-send']");
  $buttonSend.addEventListener('click', getData);

  function getData(e) {

    e.preventDefault();

    var $email = document.querySelector("[data-js='email']").value;
    var $password = document.querySelector("[data-js='password']").value;

    if($email === '' || $password === '') {
      validate().message('Fill in all the fields!', "[data-js='password']");
    } else {
      login($email,$password);
    }

  }

  function login (email,password) {
    var request = ajax({
      method: 'post',
      url: 'http://localhost:8000/api/login',
      data: {
        email: email ,
        password: password
      }
    })

    request.then(function (response) {
      console.log(response);
      if(response.success) {
        sessionStorage.setItem('token', response.success.token);
        window.location = 'http://localhost:3000/pages/messages.html';
      }

      if(response.error) {
        validate().message('E-mail or password does not match.', "[data-js='password']");
      }
    })
  }


})(window.validate)
