(function(validate){

  'use strict'

  function getSuggestions() {
    var request = ajax({
      method: 'get',
      url: 'http://localhost:8000/api/suggestion',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      }
    })

    request.then(function (response) {
      if(response.error) {
        validate().message('The suggestions could not be listed.', "[data-js='title']");
      }
      listSuggestion(response);
    })
  }

  function listSuggestion(messages) {
    var options = {
      data: {
        headings: [
          "NAME",
          "E-MAIL",
          "MESSAGE",
        ],
        data: messages
      }
    },

    $suggestions = new DataTable('#suggestions', options);

  }

  getSuggestions();

})(window.validate)






