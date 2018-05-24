(function(validate){

  var $buttonLogout = document.querySelector("[data-js='logout']");
  $buttonLogout.addEventListener('click', logout);


  function logout() {
    sessionStorage.setItem('token', '');
    window.location = validate().getUrl.urlFront + 'pages/login.html';
  }

})(window.validate)
