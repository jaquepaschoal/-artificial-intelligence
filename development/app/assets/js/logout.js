/*!
 * Artificial-Intelligence
 * A landing page about Artificial Intelligence
 * https://github.com/jaquepaschoal/artificial-intelligence
 * @author Jaqueline Paschoal
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function(validate){

  var $buttonLogout = document.querySelector("[data-js='logout']");
  $buttonLogout.addEventListener('click', logout);


  function logout() {
    sessionStorage.setItem('token', '');
    window.location = validate().getUrl.urlFront + 'pages/login.html';
  }

})(window.validate)
