function aboutUsOver(){
    // document.getElementById("navCard").style.navCards.shows;
    // document.querySelector('.navCard').removeAttribute('hidden');
     document.getElementById("navCard").style.visibility="visible";
    //  document.querySelector('.navCard').classList.add('shows');
    
}

function aboutUsOut(){
    
    document.getElementById("navCard").style.visibility="hidden";
}


// function load(){
//     document.getElementById("divP4_1").style.display="dispaly";
//     document.getElementById("divP4_2").style.display="none";
//     document.getElementById("divP4_3").style.display="none";

// }

// function divP4_1Main(){
//     document.getElementById("divP4_1").style.display="dispaly";
//     document.getElementById("divP4_2").style.display="none";
//     document.getElementById("divP4_3").style.display="none";
    
// }
// function divP4_2Main(){
//     document.getElementById("divP4_1").style.display="none";
//     document.getElementById("divP4_2").style.display="dispaly";
//     document.getElementById("divP4_3").style.display="none";
    
// }


// function divP4_3Main(){
//     document.getElementById("divP4_1").style.display="none";
//     document.getElementById("divP4_2").style.display="none";
//     document.getElementById("divP4_3").style.display="dispaly";
    
// }


// divP4Links

// document.getElementById("divP4Link1").style.display="block";
// document.getElementById("divP4Link2").style.display="none";
// document.getElementById("divP4Link3").style.display="none";
    
// function divP4_1(){
//     document.getElementById("divP4Link1").style.display="block";
//     document.getElementById("divP4Link2").style.display="none";
//     document.getElementById("divP4Link3").style.display="none";
    
// }
// function divP4_2(){
//     document.getElementById("divP4Link1").style.display="none";
//     document.getElementById("divP4Link2").style.display="block";
//     document.getElementById("divP4Link3").style.display="none";
    
// }
// function divP4_3(){
//     document.getElementById("divP4Link1").style.display="none";
//     document.getElementById("divP4Link2").style.display="none";
//     document.getElementById("divP4Link3").style.display="block";
    
// }

// document.getElementById("divP4_2Link1").style.display="block";
// function divP4_1(){
//     document.getElementById("divP4_2Link1").style.display="block";
//     document.getElementById("divP4_2Link2").style.display="none";
//     document.getElementById("divP4_2Link3").style.display="none";
    
// }
// function divP4_2(){
//     document.getElementById("divP4_2Link1").style.display="none";
//     document.getElementById("divP4_2Link2").style.display="block";
//     document.getElementById("divP4_2Link3").style.display="none";
    
// }
// function divP4_3(){
//     document.getElementById("divP4_2Link1").style.display="none";
//     document.getElementById("divP4_2Link2").style.display="none";
//     document.getElementById("divP4_2Link3").style.display="block";
    
// }


$(document).ready(function(){
    $("#divP4_1").show();
    $("#divP4_2,#divP4_3,#divP4_4,#divP4_5").hide()
})

$(div3_1).click(function(){
    $("#divP4_1").show();
    $("#divP4_2,#divP4_3,#divP4_4,#divP4_5").hide()
})

$(div3_2).click(function(){
    $("#divP4_2").show();
    $("#divP4_1,#divP4_3,#divP4_4,#divP4_5").hide()
    
    $("#divP4_1Text1").show();
    $("#divP4_1Text2,#divP4_1Text3").hide()
})

$(div3_3).click(function(){
    $("#divP4_3").show();
    $("#divP4_1,#divP4_2,#divP4_4,#divP4_5").hide()
})

$(div3_4).click(function(){
    $("#divP4_4").show();
    $("#divP4_1,#divP4_2,#divP4_3,#divP4_5").hide()
})

$(div3_5).click(function(){
    $("#divP4_5").show();
    $("#divP4_1,#divP4_2,#divP4_4,#divP4_3").hide()
})



$(document).ready(function(){
    $("#divP4_1Text1").show();
    $("#divP4_1Text2,#divP4_1Text3").hide()
})

$(divP4_1Link1).click(function(){
    $("#divP4_1Text1").show();
    $("#divP4_1Text2,#divP4_1Text3").hide()
})

$(divP4_1Link2).click(function(){
    $("#divP4_1Text2").show();
    $("#divP4_1Text1,#divP4_1Text3").hide()
})

$(divP4_1Link3).click(function(){
    $("#divP4_1Text3").show();
    $("#divP4_1Text1,#divP4_1Text2").hide()
})



$('#divP4_2').show(function(){
    $("#divP4_2Text1").show();
    $("#divP4_2Text2,#divP4_2Text3").hide()
})

$(divP4_2Link1).click(function(){
    $("#divP4_2Text1").show();
    $("#divP4_2Text2,#divP4_2Text3").hide()
})

$(divP4_2Link2).click(function(){
    $("#divP4_2Text2").show();
    $("#divP4_2Text1,#divP4_2Text3").hide()
})

$(divP4_2Link3).click(function(){
    $("#divP4_2Text3").show();
    $("#divP4_2Text1,#divP4_2Text2").hide()
})


$('#divP4_3').show(function(){
    $("#divP4_3Text1").show();
})


$('#divP4_4').show(function(){
    $("#divP4_4Text1").show();
    $("#divP4_4Text2,#divP4_4Text3").hide()
})

$(divP4_4Link1).click(function(){
    $("#divP4_4Text1").show();
    $("#divP4_4Text2,#divP4_4Text3").hide()
})

$(divP4_4Link2).click(function(){
    $("#divP4_4Text2").show();
    $("#divP4_4Text1,#divP4_4Text3").hide()
})

$(divP4_4Link3).click(function(){
    $("#divP4_4Text3").show();
    $("#divP4_4Text1,#divP4_4Text2").hide()
})


$('#divP4_5').show(function(){
    $("#divP4_5Text1").show();
    $("#divP4_5Text2,#divP4_5Text3").hide()
})

$(divP4_5Link1).click(function(){
    $("#divP4_5Text1").show();
    $("#divP4_5Text2,#divP4_5Text3").hide()
})

$(divP4_5Link2).click(function(){
    $("#divP4_5Text2").show();
    $("#divP4_5Text1,#divP4_5Text3").hide()
})

$(divP4_5Link3).click(function(){
    $("#divP4_5Text3").show();
    $("#divP4_5Text1,#divP4_5Text2").hide()
})

function onMouseEnter(){
    document.getElementById("div13Fixed_2").style.display="block";
    document.getElementById("div13Fixed").style.display="none";
}

function onMouseOUt(){
    document.getElementById("div13Fixed_2").style.display="none";
    document.getElementById("div13Fixed").style.display="block";
}

var imageSources = ["fa-solid fa-phone-volume fa-2xl", "fa-solid fa-calculator fa-2xl","fa-solid fa-envelope fa-2xl"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("imageFixed").classList = imageSources[index];
  index++;
} , 2000);

function clickImage(){
    document.getElementById("image2").style.transitionDelay='.1s';
    document.getElementById("image3").style.transitionDelay='.15s';
    document.getElementById("image4").style.transitionDelay='.2s';
    document.getElementById("image5").style.transitionDelay='.25s';
    document.getElementById("image6").style.transitionDelay='.3s';


    document.getElementById("image2").style.opacity="1"
    document.getElementById("image3").style.opacity="1"
    document.getElementById("image4").style.opacity="1"
    document.getElementById("image5").style.opacity="1"
    document.getElementById("image6").style.opacity="1"
    document.getElementById("image_").style.visibility="visible"
    document.getElementById("image").style.visibility="hidden"
}
function clickImage_(){
    document.getElementById("image2").style.transitionDelay='.3s';
    document.getElementById("image3").style.transitionDelay='.25s';
    document.getElementById("image4").style.transitionDelay='.2s';
    document.getElementById("image5").style.transitionDelay='.15s';
    document.getElementById("image6").style.transitionDelay='.1s';



    document.getElementById("image2").style.opacity="0"
    document.getElementById("image3").style.opacity="0"
    document.getElementById("image4").style.opacity="0"
    document.getElementById("image5").style.opacity="0"
    document.getElementById("image6").style.opacity="0"
    document.getElementById("image").style.visibility="visible"
    document.getElementById("image_").style.visibility="hidden"
}

 
