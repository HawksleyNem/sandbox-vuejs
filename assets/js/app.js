var vm = new Vue({
    el:'#app',
    // Variables
    data: {
        // monMessageBonjour: "Bonjour",
        // monSujet: "les Bachelors",
        // isActive: true,
        // lamanu: "La Manu, l'école des métiers du numérique"
        fruit: {
                name: 'Fraise',
                couleur: 'Rouge'
            },
        
        campusLH: {
            Campus: "La Manu, campus du Havre",
            Ville: "Le Havre",
            Adresse: "10 place Léon Meyer",
            Téléphone: "09 86 27 17 04",
            Email: "contact-lehavre@lamanu.fr"
        }
    },
    // Fonctions
    methods: {
        // changeClass: function() {
        //     if (this.monSujet == "les Bachelors") {
        //         this.monSujet = "toi"
        //     }
        //     else {
        //         this.monSujet = "les Bachelors"
        //     }
        //     this.isActive = !this.isActive
        // }
    }
})