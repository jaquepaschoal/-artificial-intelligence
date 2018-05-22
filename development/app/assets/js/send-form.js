/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function(){

  'use strict'

  var $buttonSend = document.querySelector("[data-js='btn-send']");
  $buttonSend.addEventListener('click', getData);

  function getData(e) {

    e.preventDefault();

    var $name = document.querySelector("[data-js='name']").value;
    var $email = document.querySelector("[data-js='email']").value;
    var $message = document.querySelector("[data-js='message']").value;

    if($name === '' || $email === '' || $message === '') {
      error('Fill in all the fields');
    } else {
      insertMessage($name,$email,$message);
    }

  }

  function insertMessage (name,email,message) {
    var request = ajax({
      method: 'post',
      url: 'http://localhost:8000/api/suggestion',
      data: {
        name: name ,
        email: email,
        message: message
      }
    })

    request.then(function (response) {
      console.log(response);
      //response.error.email
    })
  }

  function error(msg) {
    clear();
    var $textArea = document.querySelector("[data-js='message']");
    var $createElement = document.createElement('p');
    var $message = document.createTextNode(msg);

    $createElement.className = 'error';
    $createElement.appendChild($message);

    $textArea.insertAdjacentElement('afterend', $createElement);

  }

  function clear() {
    var $error = document.querySelector('.error');
    $error ? $error.remove() : '';
  }



})()
