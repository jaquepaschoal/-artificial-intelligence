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

  var urlBase = window.location.href;
  var urlLogin = 'http://localhost:3000/pages/login.html';
  sessionStorage.getItem('token') == '' ? window.location = urlLogin : verifyAuthentication(urlBase);

  function verifyAuthentication(url) {
    var request = ajax({
      method: 'get',
      url: 'http://localhost:8000/api/auth',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      }
    })

    request.then(function (response) {
      if(response.error) {
        window.location = urlLogin;
      }
    })
  }

})()