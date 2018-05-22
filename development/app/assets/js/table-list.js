/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */


var students = {
  headings: [
    'Name',
    'E-mail',
    'Suggestion'

  ],
  data: [
    [
      '0200831521026',
      'Robson Formigão',
      'uahsuahsiuhasuhasuhaushuahsuahsuahsuahsiuhasuhasuhaushuahsuahsuahsuahsiuhasuhasuhaushuahsuahsuahsuahsiuhasuhasuhaushuahsuahs'
    ],

  ]
};

var $publicStudents = new DataTable('#public_students');
$publicStudents.insert(students);

