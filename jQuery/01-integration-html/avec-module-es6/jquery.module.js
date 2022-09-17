// On exécute le code de jQuery qui va créer les variables globales nécessaires et on exporte 
// la variable global de jQuery pour la rendre disponible à partir des autres modules.

// NOTE: Un module est exécuté une fois et est mi en cache pour les autres appels.
//       Donc, jQuery sera téléchargé une seule fois.
import "./vendor/jquery-3.6.1.min.js";
export default window.jQuery.noConflict(true);