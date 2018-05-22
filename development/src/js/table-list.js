

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

