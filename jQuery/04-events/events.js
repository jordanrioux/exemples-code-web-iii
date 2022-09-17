// jQuery permet de facilement assigner un événement grâce à la fonction .on(...)
// NOTE: Il existe des raccourcis pour assigner un événement, mais on préfère 
//       la méthode .on(...) puisqu'on peut changer le nom de l'événemnt plus facilement.

$("button").on("click", function(event) {
    console.log("Cliqué1");
});


// Voici quelques événements supportés, je vous conseille de regarder la liste des événements en JS
// et la documentation officielle de jQuery: 
"blur";
"change";
"blur";
"click";
"dblclick";
"focus";
"keydown";
"keypress";
"keyup";
"scroll";
"select";
"resize";
"mousedown";
"mousemove";
"hover";


// On peut utiliser la fonction .trigger(...) pour déclencher un événement à partir du code
$("button").on("click", function(event) {
    // Trigger l'événement submit sur le clic d'un bouton
    $("form").first().trigger("submit");
});


// Il est également possible de définir des événements customs
$("#exemple").on("custom", function(event, param1, param2) {
    console.log(param1 + "\n" + param2);
});

// Trigger l'événement `custom` avec les paramètres "Hello" (param1) et "World" (param2)
$("#exemple").trigger("custom", [ "Hello", "World" ]);
