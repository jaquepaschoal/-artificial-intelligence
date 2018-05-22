/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function(win,document) {

  'use strict'

  function validate() {
    return {
      message: function message(msg,element) {
        this.clear();
        var $element = document.querySelector(element);
        var $createElement = document.createElement('p');
        var $message = document.createTextNode(msg);

        $createElement.className = 'error';
        $createElement.appendChild($message);

        $element.insertAdjacentElement('afterend', $createElement);

      },

      clear: function clear() {
        var $error = document.querySelector('.error');
        $error ? $error.remove() : '';
      }
    }
  }

  win.validate = validate;
})(window,document)
