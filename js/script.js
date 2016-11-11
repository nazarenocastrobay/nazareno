//responsive
var altura = window.innerHeight;
var ancho = $(window).width();
if(altura > 673){
  $('.cuadrado').css({'height' : '550px'});
  $('.abajo-izquierdo img').css({"max-width": "62%", 'right': '-10%', 'bottom': '-20%'});
  $('.abajo-derecho img').css({"max-width": "100%"});

}
if(ancho > 1500){
  $('.cuadrado').css({'height' : '600px'});
  $('.abajo-izquierdo img').css({"max-width": "50%", 'right': '-10%', 'bottom': '-50%'});

}





    //Animacion cuadrados

    $( ".abajo-izquierdo" ).mouseenter(function() {
      $(this).css({"background-color": "#22313F", "cursor": "pointer"});
      $('.abajo-izquierdo h1').css({"color": "white" });
      $('.abajo-izquierdo img').css({"transform": "scale(1.2,1.2) translate(10px)"});

    });
    $( ".abajo-izquierdo" ).mouseleave(function() {
      $(this).css({"background-color": "#f1c40f"});
      $('.abajo-izquierdo h1').css({"color": "black" });
      $('.abajo-izquierdo img').css({"transform": "scale(1,1) translate(-10px)"});

    });



    $( ".abajo-derecho" ).mouseenter(function() {
      $(this).css({"background-color": "black", "cursor": "pointer"});
      $('.abajo-derecho h1').css({"color": "white" });
      $('.abajo-derecho img').css({"transform": "translatex(45%)"});

    });
    $( ".abajo-derecho" ).mouseleave(function() {
      $(this).css({"background-color": "#c0392b"});
      $('.abajo-derecho h1').css({"color": "white" });
      $('.abajo-derecho img').css({"transform": "translate(-20%)"});

    });
function animacion (){
    //Animacion
    //Row 1 CREACTIVITY / FAST FOOD MEALS
    $('.row1 div:nth-child(odd)').mouseenter(function(){
      $('.caption').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row1 div:nth-child(odd)').mouseleave(function(){
      $('.caption').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });
    $('.row1 div:nth-child(even)').mouseenter(function(){
      $('.caption1').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row1 div:nth-child(even)').mouseleave(function(){
      $('.caption1').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });

    //Row 2 DA SHAKE / BRAINSTORYING
    $('.row2 div:nth-child(odd)').mouseenter(function(){
      $('.caption2').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row2 div:nth-child(odd)').mouseleave(function(){
      $('.caption2').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });
    $('.row2 div:nth-child(even)').mouseenter(function(){
      $('.caption3').css({'transform': 'translatey(150%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row2 div:nth-child(even)').mouseleave(function(){
      $('.caption3').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });

    //Row 3 LAKE TAHOE
    $('.row3 div:nth-child(odd)').mouseenter(function(){
      $('.caption4').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row3 div:nth-child(odd)').mouseleave(function(){
      $('.caption4').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });



    //Row 4 BAMBOO
    $('.row4 div:nth-child(odd)').mouseenter(function(){
      $('.caption5').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.1)'})
    });
    $('.row4 div:nth-child(odd)').mouseleave(function(){
      $('.caption5').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });

    //Row 5 PORTAFOLIO
    $('.row5 div:nth-child(odd)').mouseenter(function(){
      $('.caption6').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row5 div:nth-child(odd)').mouseleave(function(){
      $('.caption6').css({'transform': 'translatex(0)'})
      $(this).css({'transform':'scale(1)'})
    });

    //Row 6 CREACTIVITY 2
    $('.row6 div:nth-child(odd)').mouseenter(function(){
      $('.caption7').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.02)'})
    });
    $('.row6 div:nth-child(odd)').mouseleave(function(){
      $('.caption7').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });

    //Row 6 DA SHAKE PARALLAX
    $('.row7 div:nth-child(odd)').mouseenter(function(){
      $('.caption8').css({'transform': 'translatey(100%)'});
      $(this).css({'transform':'scale(1.1)'})
    });
    $('.row7 div:nth-child(odd)').mouseleave(function(){
      $('.caption8').css({'transform': 'translatey(0)'})
      $(this).css({'transform':'scale(1)'})
    });
    

};
if ($(window).width() > 960) {
    animacion();
}
else {
}

