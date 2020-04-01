console.log('Js ok');
/*
Scrivi un programma che stampi i numeri da 1 a 100, ma:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz.
per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/
var listaNumeri = document.getElementById('listaNumeri');
var print = 0;
var items = '';

for (n = 1; n <= 100; n++) {
  print = n;

  if ((n % 3 == 0) && (n % 5 == 0)) {
    print = 'FizzBuzz';
  }
  else if (n % 3 == 0) {
    print = 'Fizz';
  }
  else if (n % 5 == 0) {
    print = 'Buzz';
  }

  items += '<li>' + print + '</li>';
};

listaNumeri.innerHTML = items;
