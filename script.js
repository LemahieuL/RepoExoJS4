
var lastname = document.getElementById("lastname")
var firstname = document.getElementById("firstname")
var city = document.getElementById("city")
/*Variable manquante/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////*/
var misslastname = document.getElementById("misslastname")
var missfirstname = document.getElementById("missfirstname")
var misscity = document.getElementById("misscity")
/*Bouton envoyer/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////*/
var formvalid = document.getElementById("submit")
/*Regex pour mon formulaire/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////*/
var textvalid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèîïçà]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèîïçà]+)?/;

formvalid.addEventListener("click", validation);

function validation(event){
  if(lastname.validity.valueMissing){
    event.preventDefault();
    misslastname.textContent = 'Nom manquant';
    misslastname.style.color = "red";
  }else if(textvalid.test(lastname.value)== false){
    event.preventDefault();
    misslastname.textContent = "Valeur incorrect";
    misslastname.style.color = "orange";
  }
  if(firstname.validity.valueMissing){
    event.preventDefault();
    missfirstname.textContent = "Prénom manquant";
    missfirstname.style.color = "red";
  }else if(textvalid.test(firstname.value)== false){
    event.preventDefault();
    missfirstname.textContent = "Valeur incorrect";
    missfirstname.style.color = "orange";
  }
  if(city.validity.valueMissing){
    event.preventDefault();
    misscity.textContent = "Ville manquante";
    misscity.style.color = "red";
  }else if(textvalid.test(city.value)== false){
    event.preventDefault();
    misscity.textContent = "Valeur incorrect";
    misscity.style.color = "orange";
  }
}

function test(){
  alert("Nom : " + lastname.value + "\nPrénom : " + firstname.value + "\nVille : " + city.value)
}
