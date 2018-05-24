/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function(validate){

  'use strict'

  function getSuggestions() {
    var request = ajax({
      method: 'get',
      url: validate().getUrl.urlApi + 'suggestion',
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






