var cursorMoves = true;

$( document ).ready(function() {
    console.log( "ready!" );


    const bioBox = document.querySelector('div.homepage-topleft-info')
    const writingBox = document.querySelector('div.homepage-topright-writing')
    const curatingBox = document.querySelector('div.homepage-bottomleft-curating')
    const studioBox = document.querySelector('div.homepage-bottomright-studio')



    var width = $(window).width();
    var height = $(window).height();
    var coorX;
    var coorY;
    var storedCoorX;
    var storedCoorY;


   $(document).mousemove(function(event){

        if (cursorMoves) {

          coorX = event.pageX;
          coorY = event.pageY;

          bioBox.style.width = coorX + "px";
          bioBox.style.height = coorY + "px";

          curatingBox.style.width = coorX + "px";
          curatingBox.style.height = height - coorY + "px";

          writingBox.style.width = width - coorX + "px";
          writingBox.style.height = coorY + "px";

          studioBox.style.width = width - coorX + "px";
          studioBox.style.height = height - coorY + "px";

          $("*").css("cursor", "pointer");

          $(document).click(function(){
            cursorMoves = false;
          });
        };


        if(!cursorMoves){
          storedCoorX = coorX;
          storedCoorY = coorY;

          if(storedCoorX - 25 < event.pageX && storedCoorX + 25 > event.pageX && storedCoorY - 25 < event.pageY && storedCoorY + 25 > event.pageY){
              $("*").css("cursor", "pointer");
          }else{
              $("*").css("cursor", "default");
          };


        if(storedCoorX - 25 < event.pageX && storedCoorX + 25 > event.pageX && storedCoorY - 25 < event.pageY && storedCoorY + 25 > event.pageY){
              $(document).click(function(){
                if(storedCoorX - 25 < event.pageX && storedCoorX + 25 > event.pageX && storedCoorY - 25 < event.pageY && storedCoorY + 25 > event.pageY){
                  cursorMoves = true;
                }else{
                  cursorMoves = false;
                };
            });
          };


        };
      });

      $('.heading').hover(function(){
         $("*").css("cursor", "pointer");
       });

});
