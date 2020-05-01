//<script src="../analyse/analyse.js" type="text/javascript"></script>
//<button id="ban" onclick="analyse();">Analyse</button>


function loadanalyse(){
    window.readys=[];
    document.body.removeChild(document.getElementById("btloadanjs"));

    for(tj of ["adjectives","adverbs","conjunctions","determiners","nouns","prepositions","pronouns","verbs"]){
        var sjs=document.createElement("script");
        sjs.setAttribute("src","../js/"+tj+".js");
        sjs.setAttribute("type","text/javascript");
        sjs.setAttribute("onload","ready('"+tj+"');");
        document.body.appendChild(sjs);
    }
    



}



function ready(nom){
    if(!(window.readys.includes(nom))){
        window.readys.push(nom);
    }
    if(window.readys.length==8){
        //TODO
        var sjs=document.createElement("script");
        sjs.setAttribute("src","../analyse/analyse.js");
        sjs.setAttribute("type","text/javascript");
        sjs.setAttribute("onload","analyse();");
        document.body.appendChild(sjs);
    }
    console.log(window.readys);
}














