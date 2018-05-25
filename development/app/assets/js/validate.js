/*!
 * Artificial-Intelligence
 * A landing page about Artificial Intelligence
 * https://github.com/jaquepaschoal/artificial-intelligence
 * @author Jaqueline Paschoal
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function(win,document) {

  'use strict'

  function validate() {
    return {
      message: function message(msg,element,type) {
        this.clear();
        var $element = document.querySelector(element);
        var $createElement = document.createElement('p');
        var $message = document.createTextNode(msg);

        $createElement.className = type;
        $createElement.appendChild($message);

        $element.insertAdjacentElement('afterend', $createElement);

      },

      clear: function clear() {
        var $error = document.querySelector('.error');
        var $success = document.querySelector('.success');

        $error ? $error.remove() : '';
        $success ? $success.remove() : '';

      },

      getUrl: {
        urlApi: 'http://localhost:8000/api/',
        urlFront: 'http://localhost:3000/'
      }
    }
  }

  win.validate = validate;
})(window,document)
