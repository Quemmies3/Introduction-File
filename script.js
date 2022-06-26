const Name = 'Olukemi Odedeyi';
const Height = '5 ft 7';
const Country = 'Nigeria';


const displayName = document.getElementById('displayName');
const displayHeight = document.getElementById('displayHeight');
const displayCountry = document.getElementById('displayCountry');

displayName.innerHTML = `<p>Hello, my name is  ${Name}</p>`
displayHeight.innerHTML = `<p>I am ${Height} tall</p>`
displayCountry.innerHTML = `<p>I am from  ${Country}</p>`