// EVENT Manipulation

//Event Delegation

// it allows users to append a SINGLE listener to  a parent element that adds it to all of its parent And future document that match a seloector

document.querySelector('#sports').addEventListener('click', function(e) {

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if (target.matches('ol')) {
        target.style.backgroundColor = 'lightgrey';
    }

})

const sports = document.querySelector('#sports');
const newSport = document.createElement('ol');

newSport.innerHTML = " Rugby";
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);