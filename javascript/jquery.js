var images = ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg"];
var num=0;
function show() {
    console.log("yes");
    var show = document.getElementById("show");
    num++;
    if(num >= images.length) {
    num=0;
    }
   
    show.src = images[num];
}

var images2 = ["images/image5.jpg","images/image6.jpg","images/image7.jpg","images/image8.jpg"];
var num2=0;
function show2() {
    console.log("yes");
    var show = document.getElementById("show2");
    num++;
    if(num >= images2.length) {
    num=0;
    }
   
    show.src = images2[num];
}


//******JQUERY EFFECTS************//
$(document).ready(function() {
    $("#acom1").hide();
    $("#acom2").hide();
    $("#acom3").hide();
    $("#dream").hide();
  
    /*########### FADE OUT IMAGE ###########*/
    $("#btn").click(function(){
        $("#dream").fadeIn(3000).delay(1000).fadeOut(3000);
   
    });
    $("#btn1").click(function(){
        $("#acom1").slideToggle(2000);
   
    });
  
    $("#btn2").click(function(){
        $("#acom2").slideToggle(2000);
   
    });

    $("#btn3").click(function(){
        $("#acom3").slideToggle(2000);
   
    });
  
 /*########### END FADE OUT IMAGE ###########*/



  /*########### READ MORE ###########*/
    $('#revealResearch').click( function(){
        $('.research').slideToggle(2000);
     });


     $("#moreBtn").click(function() {
        $("#moreBtn").fadeOut(100);
        $(".readmore1").slideDown(2000);
    
    })

    $("#andmoreBtn").click(function() {
        $("#andmoreBtn").fadeOut(100);
        $(".readmore2").slideDown(2000);
    
    })

    $("#close").click(function() {
        $("#close").fadeOut(100);
        $(".readmore2").slideUp(2000);
        $(".readmore1").slideUp(2000)
        $("#p1").slideUp(2000)
    
    })
  

});
/*########### ENDREAD MORE ###########*/