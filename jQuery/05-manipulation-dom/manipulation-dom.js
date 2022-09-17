// jQuery possède énormément de fonctions pour la manipulation du DOM
// Pour ajouter un nouvel élément dans le DOM, on peut utiliser les méthodes append, before, after, appendTo, insertBefore, insertAfter, prepend ou prependTo.

// Ajoute une balise <p> à la fin de #container
$("#container").append("<p>Hello World</p>");

// Version alternative (création explicite de l'élément)
const paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World";
$("#container").append(paragraph);


// JS Vanille (moderne)
// NOTE: Pour l'ajout de beaucoup d'éléments, il est recommandé d'utiliser un fragment (document.createFragment).
// const container = document.querySelector("#container");
// container.innerHTML = `
//     <p>Hello World</p>;
// `;

// ----------------------

// Modification des classes CSS (addClass, removeClass, hasClass)
// NOTE: Voir element.classList pour la version moderne en JS vanille
$("p").addClass("bold");
$("p").removeClass("bold");
if ($("p").hasClass("bold")) {
    
}

// Lire ou modifier le style inline CSS
$("p").css("width"); // Retourne la largeur (get)
$("p").css("width", "125px"); // Applique la largeur (set)

// Appliquer plusieurs propriétés en même temps
$("p").css({
    color: "gray",
    height: "60px",
    width: "125px",
}); 


// Modificaiton des attributs
$("p").html("jQuery");
$("a").attr("href", "https://codewithjordy.com");
$("abbr").removeAttr("title");