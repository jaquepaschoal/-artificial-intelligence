(function(){

  var $buttonLogout = document.querySelector("[data-js='logout']");
  $buttonLogout.addEventListener('click', logout);

  function logout() {
    sessionStorage.setItem('token', '');
    window.location = 'http://localhost:3000/pages/login.html';
  }

})()
