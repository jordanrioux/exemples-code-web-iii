// jQuery pratiquemment tous les sélecteurs CSS existants
// Voir https://www.w3schools.com/cssref/css_selectors.asp

$("*");     // Tous les éléments de la page
$("#main"); // L'élément avec le ID `main`
$(".external-link"); // Les éléments avec la classe CSS `external-link`
$(".a, .b"); // Les éléments avec la classe CSS `a` ou `b`
$("h1"); // Les éléments `<h1>`
$("h1, p, div"); // Les éléments `<h1>`, `<p>` et `<div>`

$("p:first");   // Le premier élément `<p>`
$("p:last");    // Le dernier élément `<p>`
$("p:even");    // Tous les éléments `<p>` pairs
$("p:odd");     // Tous les éléments `<p>` impairs
$("div:first-child"); // Tous les élément `<div>` qui sont le premier enfant de leur parent
$("[href]");    // Tous les éléments avec l'attribut `href`
$(":checked");  // Tous les éléments `<input>` qui sont cochés
$("ul li");     // Tous les éléments `<li>` qui sont descendants d'un élement `<ul>`