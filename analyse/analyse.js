

function recup(div){
    for(elt1 of div.children){
        //console.log(elt1.nodeName);
        if(elt1.nodeName=="DIV"){
            recup(elt1);
        }
        else if(elt1.nodeName=="P"){

            tt=elt1.innerHTML;

            while(tt.includes("\t")){
                tt=tt.replace("\t"," ");
            }

            while(tt.includes("\n")){
                tt=tt.replace("\n"," ");
            }

            while(tt.includes("  ")){
                tt=tt.replace("  "," ");
            }
            
            window.txt+=tt+"\n";
        }
    }
}


function getTexte(){
    window.txt="";
    var dt=document.getElementById("texte");
    recup(dt);
    //alert('txt = "'+window.txt+'"');

}



function decoupfrases(){
    frases=[];
    debfrases=0;
    finfrase=0;
}



function analyse(){
    getTexte();
    /*
    console.log("nombre d'adverbes : ",adverbs);
    console.log("nombre d'adjectifs : ",adjectives);
    console.log("nombre de noms : ",nouns);
    console.log("nombre de verbes : ",verbs);
    console.log("nombre de conjonctions : ",conjunctions);
    console.log("nombre de déterminants : ",determiners);
    console.log("nombre de prépositions : ",prepositions);
    console.log("nombre de pronoms : ",pronouns);
    */



}

