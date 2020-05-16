

const lettres=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function research(){

    var textes=Array.from(liste_textes);
    shuffle(textes);

    var trier_par=document.getElementById("trierpar").value;
    //alert(trier_par)
    if(trier_par=="Titres par ordre alphabétique - croissant"){
        textes.sort(function(a, b) {
        var keyA = a.titre;
            keyB = b.titre;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        });

    }
    if(trier_par=="Titres par ordre alphabétique - décroissant"){
        textes.sort(function(a, b) {
        var keyA = a.titre;
            keyB = b.titre;
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
        });

    }
    if(trier_par=="Auteurs par ordre alphabétique - croissant"){
        textes.sort(function(a, b) {
        var keyA = a.auteur;
            keyB = b.auteur;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        });

    }
    if(trier_par=="Auteurs par ordre alphabétique - décroissant"){
        textes.sort(function(a, b) {
        var keyA = a.auteur;
            keyB = b.auteur;
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
        });

    }
    if(trier_par=="Dates - croissantes"){
        textes.sort(function(a, b) {
        var keyA = a.date;
            keyB = b.date;
        // Compare the 2 dates
        if(keyA==null){ return 1};
        if(keyB==null){ return -1};
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        });

    }
    if(trier_par=="Dates - décroissantes"){
        textes.sort(function(a, b) {
        var keyA = a.date;
            keyB = b.date;
        // Compare the 2 dates
        if(keyA==null){ return 1};
        if(keyB==null){ return -1};
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
        });

    }

    var filtres={
    "poème":document.getElementById("filtre_poeme").checked,
    "roman":document.getElementById("filtre_roman").checked,
    "pièce de théatre":document.getElementById("filtre_theatre").checked,
    "texte argumentatif":document.getElementById("filtre_argu").checked,
    "entier":document.getElementById("filtre_entier").checked,
    "extrait":document.getElementById("filtre_extrait").checked,
    null:true
    };
    var recherche=document.getElementById("recherche").value;

    //tri
    
    //nettoyage
    document.getElementById("ensemble").innerHTML="";
    //alert(document.getElementById("ensemble").children);
    //creation
    for(t of textes){
        if(recherche==""){ var correspond=true; }
        else{
            var correspond=false;
        }
        //
        if(t.titre!=null && t.titre!=undefined && t.titre.toLowerCase().includes(recherche.toLowerCase())){ correspond=true; }
        if(t.auteur!=null && t.auteur!=undefined && t.auteur.toLowerCase().includes(recherche.toLowerCase())){ correspond=true; }

        if( !(filtres[t.etat] && filtres[t.genre]) ){
            correspond= false;
        }
        //
        if(correspond){
            var divtext=document.createElement("div");
            divtext.setAttribute("class","divtext");

            if(t.tpfich=="textevu"){
                divtext.setAttribute("class","divtext divtextvu");
            }
            if(t.tpfich=="texteoral"){
                divtext.setAttribute("class","divtext divtextvu");
            }
            if(t.tpfich=="ficheauteur"){
                divtext.setAttribute("class","divtext divtextvu");
            }
            if(t.tpfich=="ficheparcours"){
                divtext.setAttribute("class","divtext divtextvu");
            }
            if(t.tpfich=="ficheoeuvre"){
                divtext.setAttribute("class","divtext divficheoeuvre");
            }

            //t est le titre du texte
            if(t.titre!=null){
                var ti=document.createElement("h1");
                ti.innerHTML=t.titre;
                divtext.appendChild(ti);
            }
            
            // 
            var txt="";
            if(t.auteur!=null){
                txt+=t.auteur;
            }
            if(t.date!=null){
                txt+=" , ("+t.date+")"
            }
            var st=document.createElement("p");
            st.innerHTML=txt;
            divtext.appendChild(st);
            
            //
            //console.log(t);
            if(t.liens.length > 0){
                var tt=document.createElement("h2");
                tt.innerHTML="liens : ";
                divtext.appendChild(tt);
                var ul=document.createElement("ul");
                for(ll of t.liens){
                    var pp=document.createElement("p");
                    var l1=document.createElement("b");
                    var l2=document.createElement("a");
                    l1.innerHTML=ll[0]+" : ";
                    l2.innerHTML="lien";
                    l2.setAttribute("href",ll[1]);
                    pp.appendChild(l1);
                    pp.appendChild(l2);
                    ul.appendChild(pp);
                }
                divtext.appendChild(ul);
            }        

            if(t.genre!=null){
                var gg=document.createElement("p")
                gg.innerHTML="genre : "+t.genre;
                divtext.appendChild(gg);
            }

            if(t.etat!=null){
                var ee=document.createElement("p")
                var tetat="etat : "+t.etat;
                if(t.etat=="entier"){ tetat="texte entier"; }
                else if(t.etat=="extrait"){ tetat="extrait du texte"; }
                ee.innerHTML=tetat;
                divtext.appendChild(ee);
            }

            document.getElementById("ensemble").appendChild(divtext);
        }
    }
}