const liste_textes=[
    {titre:"Turcaret",auteur:"Alain-René Lesage",date:null,etat:"extrait",genre:"pièce de théatre",tpfich:"textevu",liens:
        [["texte","TEXTES/ALAINRENELESAGE_extraitde_turcaret/texte.html"]]},
    {titre:"Vénus Anadyomède",auteur:"Arthur Rimbaud",date:"1870",etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["texte","TEXTES/ARTHURRIMBAUD/venus.html"]]},
    {titre:"L'aube",auteur:"Arthur Rimbaud",date:"1873",etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["texte","TEXTES/ARTHURRIMBAUD/aube.html"]]},
    {titre:"Chronique de Guinée",auteur:"Gomes Eanes de Zurara",date:"1468",etat:"extrait",genre:"texte argumentatif",tpfich:"textevu",liens:
        [["texte","TEXTES/HENRILENAVIGATEURETLEXPLORATIONDESCOTESAFRICAINES/texte.html"]]},
    {titre:"Odelette",auteur:"Théodore de Banville",date:"1856",etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["texte","TEXTES/THEODOREDEBANVILLE_ODELETTE/texte.html"]]},
    {titre:"Fonction du Poète",auteur:"Victor Hugo",date:null,etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["texte","TEXTES/VICTORHUGO_fonctiondupoete/texte.html"]]},
    {titre:"Le Crapaud",auteur:"Tristan Corbière",date:"1873",etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["texte","TEXTES/TRISTANDECORBIERE_lecrapaud/texte.html"]]},
    {titre:"Les fleurs du mal",auteur:"Charles Baudelaire",date:null,etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["l'albatros","TEXTES/BAUDELAIRE_fleursdumal/albatros.html"],
        ["l'ennemi","TEXTES/BAUDELAIRE_fleursdumal/lennemi.html"],
        ["le spleen","TEXTES/BAUDELAIRE_fleursdumal/spleen.html"],
        ["la beauté","TEXTES/BAUDELAIRE_fleursdumal/labeaute.html"]]},
    {titre:"Utopia",auteur:"Thomas More",date:"1987",etat:"extrait",genre:"roman",tpfich:"textevu",liens:
        [["texte","TEXTES/THOMASMORE_extrait_dutopia/texte.html"]]},
    {titre:"Essais",auteur:"Montaigne",date:"1580-1588",etat:"extrait",genre:"texte argumentatif",tpfich:"textevu",liens:
        [["extrait n°1","TEXTES/MONTAIGNE_Essais_extraits/extrait1.html"],
        ["extrait n°2","TEXTES/MONTAIGNE_Essais_extraits/extrait2.html"],
        ["texte d'étude linéaire","TEXTES/MONTAIGNE_Essais_extraits/etlin1.html"],
        ]},
    {titre:"la découverte des sélénites",auteur:"cyrano de Bergerac",date:"1657",etat:"extrait",genre:"roman",tpfich:"textevu",liens:
        [["teste d'étude linéaire","TEXTES/CYRANODEBERGERAC_decouvertesdesselenites/et_lin.html"]]},
    {titre:"Supplément au voyage de Bougainville",auteur:"Denis Diderot",date:1796,etat:"extrait",genre:"roman",tpfich:"textevu",liens:
        [["texte d'etude linéaire","TEXTES/DEDENISDIDEROT_supplementauvoyagedebougainville/et_lin.html"]]},
    {titre:"Histoire d'un voyage fait en terre de Brésil",auteur:"Jean de Lery",date:"1578",etat:"extrait",genre:"récit de voyage",tpfich:"textevu",liens:
        [["texte d'étude linéaire","TEXTES/JEAN_DE_LERY_histoiredunvoiyagefaiteenterredebresil/et_lin.html"]]},
    {titre:"L'art",auteur:"Théophile Gautier",date:"1858",etat:"entier",genre:"poème",tpfich:"textevu",liens:
        [["texte","TEXTES/THEOPHILE_GAUTIER/lart.html"]]},
    {titre:"Fiche d'Oeuvre : Le mariage de Figaro",auteur:"Beaumarchais",date:"1784",etat:"cours",genre:"pièce de théatre",tpfich:"ficheoeuvre",liens:[
        ["fiche","FICHE_OEUVRE/bea_lmdf.html"]
    ]},
    {titre:"Fiche d'Oeuvre : Les Fleurs du Mal",auteur:"Baudelaire",date:"1857",etat:"cours",genre:"poème",tpfich:"ficheoeuvre",liens:[
        ["fiche","FICHE_OEUVRE/bau_fdm.html"]
    ]},
    {titre:"Fiche d'Oeuvre : Les Essais",auteur:"Montaigne",date:"1580-1588",etat:"cours",genre:"texte argumentatif",tpfich:"ficheoeuvre",liens:[
        ["fiche","FICHE_OEUVRE/mon_essais.html"]
    ]},
    {titre:"Fiche d'Oeuvre : Le Rouge et le Noir",auteur:"Stendhal",date:"1830",etat:"cours",genre:"roman",tpfich:"ficheoeuvre",liens:[
        ["fiche","FICHE_OEUVRE/ste_reln.html"]
    ]},
    {titre:"fiche cour : le comique",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fiche_comique.html"]
    ]},
    {titre:"fiche cour : l'utilisation particulière de la syntaxe",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fiche_syntaxe.html"]
    ]},
    {titre:"fiche cour : les procédés de comparaison",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fcomparaison.html"]
    ]},
    {titre:"fiche cour : les procédés d'animation",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fanim.html"]
    ]},
    {titre:"fiche cour : les procédés de substitution",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fsubstitution.html"]
    ]},
    {titre:"fiche cour : les procédés d'opposition",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fopposition.html"]
    ]},
    {titre:"fiche cour : les procédés d'insistance ",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/finsist.html"]
    ]},
    {titre:"fiche cour : les procédés d'atténuation ",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fatténuation.html"]
    ]},
    {titre:"fiche cour : les sonorités ",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/fsonorites.html"]
    ]},
    {titre:"fiches cour",auteur:"",date:null,etat:"cours",genre:null,tpfich:"fichecours",liens:[
        ["fiche","FICHES_COURS/rfiche.html"]
    ]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
    //{titre:"",auteur:"",date:null,etat:"extrait",genre:null,tpfich:"textevu",liens:[]},
];