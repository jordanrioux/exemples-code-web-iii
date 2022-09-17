// La fonction $ prend un sélecteur qui va retourner tous les éléments HTML qui match le sélecteur 
// dans une collection contenant des objets jQuery représentant ces éléments HTML.
$("#exemple").html("Nouveau HTML");

// JS vanille
// document.querySelector("#exemple").innerHTML = "Nouvea HTML";


// ---------------------------


// Ici, on récupère tous les éléments h1 pour leur assigner le HTML "Exemple"
$("h1").html("Exemple");

// JS vanille
// const titles = document.querySelectorAll("h1");
// for (let i = 0; i < titles.length; ++i) {
//     titles[i].innerHTML = "Exemple";
// }


// ---------------------------


// Il est également possible d'accéder au this et de le transformer en un élément jQuery.
// NOTE: this est un élément HTML et il est possible de transformer n'importe quel élément HTML en objet jQuery.
$("button:first").click(function() {
    $(this).html("Cliqué!");
}); 

// JS vanille
// const button = document.querySelector("button:first");
// button.addEventListener("click", function(e) {
//     this.innerHTML = "Cliqué!";
// });


// ---------------------------

// Il est également possible de passer une fonction à $ qui va assigner cette fonction à l'événement DOMContentLoaded 
// Il s'agit de l'événement qui s'exécute lorsque le DOM de la page est prêt à être utiliser.
// NOTE: Cet événement n'est pas nécessaire si vous utilisez un module ES6.

$(function() {
    console.log('DOM fully loaded and parsed');
});

// JS vanille
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });
