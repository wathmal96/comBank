function aboutUsOver(){
    // document.getElementById("navCard").style.navCards.shows;
    // document.querySelector('.navCard').removeAttribute('hidden');
     document.getElementById("navCard").style.visibility="visible";
    //  document.querySelector('.navCard').classList.add('shows');
    
}

function aboutUsOut(){
    
    document.getElementById("navCard").style.visibility="hidden";
}


document.getElementById("divP4_1").style.visibility="visible";

function divP4_1Main(){
    document.getElementById("divP4_1").style.visibility="visible";
    document.getElementById("divP4_2").style.visibility="hidden";
    // document.getElementById("divP4_3").style.display="none";
    
}
function divP4_2Main(){
    document.getElementById("divP4_1").style.visibility="hidden";
    document.getElementById("divP4_2").style.visibility="visible";
    // document.getElementById("divP4_3").style.display="none";
    
}

// divP4Links

document.getElementById("divP4Link1").style.display="block";
function divP4_1(){
    document.getElementById("divP4Link1").style.display="block";
    document.getElementById("divP4Link2").style.display="none";
    document.getElementById("divP4Link3").style.display="none";
    
}
function divP4_2(){
    document.getElementById("divP4Link1").style.display="none";
    document.getElementById("divP4Link2").style.display="block";
    document.getElementById("divP4Link3").style.display="none";
    
}
function divP4_3(){
    document.getElementById("divP4Link1").style.display="none";
    document.getElementById("divP4Link2").style.display="none";
    document.getElementById("divP4Link3").style.display="block";
    
}