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
      error();
    }

    insertMessage();
  }

  function error() {
    clear();
    var $textArea = document.querySelector("[data-js='message']");
    var $createElement = document.createElement('p');
    var $message = document.createTextNode('Fill in all the fields');

    $createElement.className = 'error';
    $createElement.appendChild($message);

    $textArea.insertAdjacentElement('afterend', $createElement);

  }

  function clear() {
    var $error = document.querySelector('.error');
    $error ? $error.remove() : '';
  }



})()
