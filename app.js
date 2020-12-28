
function calculateAge() {

    var userAge = prompt("Hey! please enter the year you were born ")

    var calculation = (2020 - userAge) * 365;


    var h3 = document.createElement('h3')

    var text = document.createTextNode(" Hey! You are " + calculation + " days old.");

    h3.setAttribute("id" , "calculation");

    h3.appendChild(text);

    document.getElementById('int').appendChild(h3);
}


function reset(){
    document.getElementById('calculation').remove()
}




